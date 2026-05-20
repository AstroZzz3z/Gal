const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const INDEX_PATH = path.join(ROOT, ".rag", "index.json");

const SOURCE_PRIORITIES = [
  ["docs/story-blueprint.md", 100],
  ["docs/writing-guide.md", 90],
  ["docs/story-outline.md", 80],
  ["docs/canon", 78],
  ["docs/framework.md", 70],
  ["script.js", 65],
  ["docs/asset-plan.md", 55],
  ["docs/rag-design.md", 50],
  ["README.md", 40],
  ["docs/drafts", 35],
];

const STOPWORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "this",
  "that",
  "一个",
  "一些",
  "这里",
  "可以",
  "需要",
  "不要",
  "不是",
  "他们",
  "我们",
  "进行",
  "当前",
]);

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(full);
    return [full];
  });
}

function projectPath(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join("/");
}

function sourcePriority(relPath) {
  const match = SOURCE_PRIORITIES.find(([prefix]) => relPath === prefix || relPath.startsWith(`${prefix}/`));
  return match ? match[1] : 20;
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");
}

function getLineNumber(text, offset) {
  return text.slice(0, offset).split("\n").length;
}

function inferKind(relPath, heading = "") {
  if (relPath.includes("/canon/")) return "canon";
  if (relPath.includes("/drafts/")) return "draft";
  if (relPath === "script.js") return heading.includes("function ") ? "runtime" : "story";
  if (relPath.includes("writing-guide")) return heading.includes("人物") || heading.includes("声音") ? "voice" : "guide";
  if (relPath.includes("story-blueprint")) return "canon";
  if (relPath.includes("story-outline")) return "outline";
  if (relPath.includes("framework")) return "framework";
  if (relPath.includes("asset-plan")) return "asset";
  return "doc";
}

function inferChapterSection(text) {
  const chapterMatch = text.match(/(?:Chapter|chapter|第)(?:\s*)(\d+|[一二三四五六七八])|ch(\d+)/i);
  const sectionMatch = text.match(/(?:Section|section)(?:\s*)(\d+)[-.](\d+)|ch(\d+)-s(\d+)/i);
  const cn = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8 };
  const chapterNum = chapterMatch?.[1] ? cn[chapterMatch[1]] || Number(chapterMatch[1]) : Number(chapterMatch?.[2]);
  const sectionChapter = sectionMatch?.[1] || sectionMatch?.[3];
  const sectionNum = sectionMatch?.[2] || sectionMatch?.[4];
  return {
    chapter_id: chapterNum ? `ch${chapterNum}` : sectionChapter ? `ch${sectionChapter}` : null,
    section_id: sectionChapter && sectionNum ? `ch${sectionChapter}-s${sectionNum}` : null,
  };
}

function inferCharacters(text) {
  const found = [];
  [
    ["zhou", /周行/g],
    ["lin", /林澈/g],
    ["xia", /夏南星/g],
    ["wangshu", /顾望舒/g],
  ].forEach(([id, pattern]) => {
    if (pattern.test(text)) found.push(id);
  });
  return found;
}

function inferVariables(text) {
  return ["trust", "discipline", "future_sync"].filter((name) => text.includes(name));
}

function tokenize(text) {
  const lower = text.toLowerCase();
  const words = lower.match(/[a-z0-9_]+|[\u4e00-\u9fff]{2,}/g) || [];
  const chars = lower.match(/[\u4e00-\u9fff]/g) || [];
  const bigrams = [];
  for (let i = 0; i < chars.length - 1; i += 1) bigrams.push(chars[i] + chars[i + 1]);
  return [...words, ...bigrams].filter((token) => !STOPWORDS.has(token));
}

function scoreChunk(query, chunk) {
  const queryTokens = tokenize(query);
  if (!queryTokens.length) return 0;
  const chunkTokens = chunk.tokens || tokenize(`${chunk.summary}\n${chunk.text}`);
  const tokenSet = new Set(chunkTokens);
  let score = 0;
  queryTokens.forEach((token) => {
    if (tokenSet.has(token)) score += 3;
    if (chunk.id.includes(token) || chunk.source.includes(token)) score += 2;
  });
  if (chunk.section_id && query.includes(chunk.section_id)) score += 12;
  if (chunk.chapter_id && query.includes(chunk.chapter_id)) score += 6;
  inferCharacters(query).forEach((char) => {
    if (chunk.character?.includes(char)) score += 5;
  });
  inferVariables(query).forEach((variable) => {
    if (chunk.variables?.includes(variable)) score += 4;
  });
  return score + chunk.source_priority / 100;
}

function splitMarkdown(relPath, text) {
  const headingMatches = [...text.matchAll(/^#{1,4}\s+(.+)$/gm)];
  if (!headingMatches.length) {
    return makeFixedChunks(relPath, text, relPath, 900);
  }
  const chunks = [];
  headingMatches.forEach((match, idx) => {
    const start = match.index;
    const end = idx + 1 < headingMatches.length ? headingMatches[idx + 1].index : text.length;
    const body = text.slice(start, end).trim();
    if (!body) return;
    if (body.length > 1400) {
      chunks.push(...makeFixedChunks(relPath, body, match[1], 1000, getLineNumber(text, start)));
    } else {
      chunks.push(makeChunk(relPath, match[1], body, getLineNumber(text, start), getLineNumber(text, end)));
    }
  });
  return chunks;
}

function makeFixedChunks(relPath, text, heading, size, lineOffset = 1) {
  const paragraphs = text.split(/\n{2,}/);
  const chunks = [];
  let buffer = "";
  let startLine = lineOffset;
  let currentLine = lineOffset;
  paragraphs.forEach((paragraph) => {
    if ((buffer + "\n\n" + paragraph).length > size && buffer) {
      chunks.push(makeChunk(relPath, heading, buffer.trim(), startLine, currentLine));
      startLine = currentLine;
      buffer = "";
    }
    buffer += `${buffer ? "\n\n" : ""}${paragraph}`;
    currentLine += paragraph.split("\n").length + 1;
  });
  if (buffer.trim()) chunks.push(makeChunk(relPath, heading, buffer.trim(), startLine, currentLine));
  return chunks;
}

function makeChunk(relPath, heading, text, lineStart, lineEnd) {
  const inferred = inferChapterSection(`${heading}\n${text}`);
  const summary = text
    .replace(/^#+\s+/gm, "")
    .split("\n")
    .find((line) => line.trim().length > 8)
    ?.trim()
    .slice(0, 140);
  const idBase = `${relPath}:${heading}`.replace(/[^a-zA-Z0-9_\-\u4e00-\u9fff]+/g, ":").replace(/:+/g, ":");
  const chunk = {
    id: idBase.slice(0, 160),
    source: relPath,
    source_priority: sourcePriority(relPath),
    kind: inferKind(relPath, heading),
    chapter_id: inferred.chapter_id,
    section_id: inferred.section_id,
    character: inferCharacters(text),
    variables: inferVariables(text),
    text,
    summary: summary || heading,
    line_start: lineStart,
    line_end: lineEnd,
  };
  chunk.tokens = tokenize(`${chunk.id}\n${chunk.summary}\n${chunk.text}`);
  return chunk;
}

function loadIndex() {
  return JSON.parse(readText(INDEX_PATH));
}

function searchIndex(index, query, limit = 8) {
  return index.chunks
    .map((chunk) => ({ ...chunk, score: scoreChunk(query, chunk) }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

module.exports = {
  ROOT,
  INDEX_PATH,
  walkFiles,
  projectPath,
  readText,
  splitMarkdown,
  makeChunk,
  tokenize,
  loadIndex,
  searchIndex,
  inferCharacters,
  inferVariables,
};
