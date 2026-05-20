#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { ROOT, INDEX_PATH, readText, loadIndex, searchIndex, inferCharacters, inferVariables } = require("./rag-common");

function parseArgs(argv) {
  const args = { limit: 8 };
  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--query") args.query = argv[++i];
    else if (arg === "--file") args.file = argv[++i];
    else if (arg === "--section") args.section = argv[++i];
    else if (arg === "--limit") args.limit = Number(argv[++i]);
    else if (arg === "--json") args.json = true;
  }
  return args;
}

function loadDraft(args) {
  if (!args.file) return "";
  const abs = path.resolve(ROOT, args.file);
  return fs.existsSync(abs) ? readText(abs) : "";
}

function lintText(text, query, contexts) {
  const findings = [];
  const dialogueLines = [...text.matchAll(/speaker:\s*"([^"]+)".*?text:\s*"([^"]+)"/gs)].map((match) => ({
    speaker: match[1],
    text: match[2],
  }));
  const plainLines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  const abstractPhrases = ["同一片天空", "星图不是", "误差会累积", "人也会", "轨道", "证明自己", "方向"];
  const sloganHits = abstractPhrases.filter((phrase) => (text.match(new RegExp(escapeRegExp(phrase), "g")) || []).length > 1);
  if (sloganHits.length) {
    findings.push({
      severity: "P2",
      rule: "dialogue.abstract_density",
      message: `抽象/金句式表达重复偏多：${sloganHits.join("、")}。`,
      suggestion: "每个 section 只保留一个情绪顶点句，其余改成动作、停顿、具体物件或普通话题。",
    });
  }

  const shortRun = longestRun(dialogueLines.map((line) => line.text.length < 12));
  if (shortRun >= 4) {
    findings.push({
      severity: "P2",
      rule: "dialogue.short_run",
      message: `连续短台词达到 ${shortRun} 句，容易显得不自然。`,
      suggestion: "加入迟疑、解释、动作描写或话题转移，让人物像正常高中生说话。",
    });
  }

  const actionLines = plainLines.filter((line) => /narrator|旁白|speaker:\s*"narrator"/.test(line)).length;
  if (dialogueLines.length >= 12 && actionLines < 3) {
    findings.push({
      severity: "P2",
      rule: "pacing.action_density",
      message: "台词较多但动作/环境描写不足。",
      suggestion: "每 3-5 句台词插入翻纸、看通知、铃声、椅子声、雨声等具体反馈。",
    });
  }

  if (/顾望舒.*喜欢|夏南星.*喜欢|吃醋|三角恋/.test(text)) {
    findings.push({
      severity: "P1",
      rule: "canon.single_heroine",
      message: "疑似引入非林澈恋爱线或三角恋表达。",
      suggestion: "顾望舒只做竞赛镜像，夏南星只做导师/社长，不写恋爱竞争。",
    });
  }

  const variables = inferVariables(text);
  if (variables.includes("future_sync") && !/ch[5-8]|第五章|第六章|第七章|第八章|志愿|大学|专业|城市|高考/.test(query + text)) {
    findings.push({
      severity: "P2",
      rule: "variable.future_sync_timing",
      message: "future_sync 在前四章不应过早成为主变量。",
      suggestion: "前四章以 trust/discipline 为主，第五章后再把大学、专业、城市选择推到台前。",
    });
  }

  const linLines = dialogueLines.filter((line) => line.speaker === "lin").map((line) => line.text).join("\n");
  if (linLines && /太棒了|最喜欢|永远|命中注定|撒娇|讨厌啦/.test(linLines)) {
    findings.push({
      severity: "P2",
      rule: "voice.lin",
      message: "林澈台词疑似过度外露或偶像化。",
      suggestion: "林澈的情绪优先通过条件、定义、笔记、动作和克制反应表现。",
    });
  }

  return {
    status: findings.some((item) => item.severity === "P1") ? "fail" : findings.length ? "warn" : "pass",
    findings,
    context_count: contexts.length,
  };
}

function longestRun(values) {
  let best = 0;
  let current = 0;
  values.forEach((value) => {
    current = value ? current + 1 : 0;
    best = Math.max(best, current);
  });
  return best;
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function main() {
  const args = parseArgs(process.argv);
  if (!fs.existsSync(INDEX_PATH)) {
    console.error("RAG index not found. Run: node tools/rag-build.js");
    process.exit(1);
  }

  const draft = loadDraft(args);
  const query = [args.query, args.section, draft.slice(0, 1200)].filter(Boolean).join("\n");
  if (!query.trim()) {
    console.error("Usage: node tools/story-lint.js --query <text> [--file docs/drafts/chapter1.md] [--section ch1-s1] [--json]");
    process.exit(1);
  }

  const index = loadIndex();
  const contexts = searchIndex(index, query, args.limit);
  const lint = lintText(draft || query, query, contexts);
  const result = {
    query: args.query || args.section || args.file,
    mode: draft ? "lint" : "retrieve",
    characters: inferCharacters(query),
    variables: inferVariables(query),
    lint,
    context: contexts.map((chunk) => ({
      id: chunk.id,
      source: chunk.source,
      score: Number(chunk.score.toFixed(2)),
      kind: chunk.kind,
      section_id: chunk.section_id,
      summary: chunk.summary,
      line_start: chunk.line_start,
      line_end: chunk.line_end,
    })),
  };

  if (args.json) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }
  console.log(`status: ${lint.status}`);
  lint.findings.forEach((finding) => {
    console.log(`- [${finding.severity}] ${finding.rule}: ${finding.message}`);
    console.log(`  suggestion: ${finding.suggestion}`);
  });
  console.log("\ncontext:");
  result.context.forEach((ctx) => {
    console.log(`- ${ctx.id} (${ctx.source}:${ctx.line_start}) score=${ctx.score}`);
    console.log(`  ${ctx.summary}`);
  });
}

main();
