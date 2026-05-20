#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const {
  ROOT,
  INDEX_PATH,
  walkFiles,
  projectPath,
  readText,
  splitMarkdown,
  makeChunk,
} = require("./rag-common");

function scriptChunks(relPath, text) {
  const chunks = [];
  const storyStart = text.indexOf("const STORY =");
  const runtimeStart = text.indexOf("function sectionStub");
  if (storyStart >= 0 && runtimeStart > storyStart) {
    chunks.push(makeChunk(relPath, "script STORY", text.slice(storyStart, runtimeStart).trim(), getLine(text, storyStart), getLine(text, runtimeStart)));
  }

  const fnMatches = [...text.matchAll(/^function\s+([a-zA-Z0-9_]+)\s*\(/gm)];
  fnMatches.forEach((match, idx) => {
    const start = match.index;
    const end = idx + 1 < fnMatches.length ? fnMatches[idx + 1].index : text.length;
    const name = match[1];
    if (!["buildRuntimeScript", "selectChoice", "makeSavePayload", "loadPayload", "showHistory", "jumpToSection", "resetLogToProgress"].includes(name)) return;
    chunks.push(makeChunk(relPath, `function ${name}`, text.slice(start, end).trim(), getLine(text, start), getLine(text, end)));
  });
  return chunks;
}

function getLine(text, offset) {
  return text.slice(0, offset).split("\n").length;
}

function main() {
  const sources = [
    "README.md",
    "script.js",
    ...walkFiles(path.join(ROOT, "docs")).map(projectPath),
  ]
    .filter((relPath) => /\.(md|js)$/.test(relPath))
    .filter((relPath) => !relPath.includes(".DS_Store"));

  const chunks = [];
  sources.forEach((relPath) => {
    const abs = path.join(ROOT, relPath);
    if (!fs.existsSync(abs)) return;
    const text = readText(abs);
    if (relPath === "script.js") {
      chunks.push(...scriptChunks(relPath, text));
    } else {
      chunks.push(...splitMarkdown(relPath, text));
    }
  });

  fs.mkdirSync(path.dirname(INDEX_PATH), { recursive: true });
  fs.writeFileSync(
    INDEX_PATH,
    JSON.stringify(
      {
        built_at: new Date().toISOString(),
        source_count: sources.length,
        chunk_count: chunks.length,
        chunks,
      },
      null,
      2,
    ),
  );
  console.log(`RAG index written: ${projectPath(INDEX_PATH)} (${chunks.length} chunks from ${sources.length} sources)`);
}

main();
