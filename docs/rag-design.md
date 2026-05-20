# 写作期 RAG 与 story-lint 设计

本文档定义写作期辅助工具的目标、输入、索引、检索输出和审稿规则。工具用于扩写 30 万字正文前后的检索、对照和 lint，不直接决定剧情；最终文本仍以 canon 文档和 `script.js` 的结构约束为准。

## 1. RAG 工具设计

### 输入文档来源

按优先级读取：

1. `docs/story-blueprint.md`：最高优先级 canon。包含全局原则、变量规则、每个 chapter/section 的情绪目标、冲突、爆点、轻松桥段、主题推进和变量差分。
2. `docs/writing-guide.md`：人物声音和台词质量标准。用于判断角色口吻、台词自然度、样张风格。
3. `docs/story-outline.md`：章节大纲和关键选项表。用于快速定位结构、字数目标、HE/BE 条件。
4. `docs/framework.md`：剧情数据格式、字段语义、存档和分支机制。
5. `script.js`：当前实际 `STORY`、角色名、变量名、资源 key、已有正文和运行时约束。只做读取，不由 RAG 工具自动写入。
6. `README.md`：项目状态摘要。
7. `docs/canon/*.md`、`docs/drafts/*.md`：若存在，由后续 A/B/主 agent 写入，优先级低于 `story-blueprint.md`，但高于临时草稿。

冲突解决顺序：

- 人物关系、变量语义、结局条件以 `docs/story-blueprint.md` 为准。
- 台词风格以 `docs/writing-guide.md` 为准。
- 可运行字段、资源 key、已实现章节以 `script.js` 为准。
- 若 A/B 新增 canon 与旧文档冲突，工具应在输出中标记 `conflict`，不要静默覆盖。

### 切块策略

建议输出 JSONL 索引，每条 chunk 不超过 800-1200 汉字。切块按语义边界优先，不按固定 token 粗切。

- 全局原则块：按二级标题切分，如“全局写作原则”“变量总规则”“台词质量基准”。
- 人物声音块：每个角色独立成块，字段包含 `character`。
- 章节蓝图块：每个 `Chapter N / Section N-M` 独立成块。若内容过长，拆成 `goals`、`conflict`、`beat`、`variable_diff` 子块。
- 样张块：按样张 section 切分，并保留代码片段类型 `sample_lines`。样张只用于风格参考，不能覆盖 canon。
- `script.js` 剧情块：按 `chapterId + sectionId` 切分，抽取 `lines` 中的 `speaker/text/choice/effects/target/endingCheck`。不要把 runtime 函数和剧情正文混在同一块。
- `script.js` runtime 块：把 `buildRuntimeScript`、`selectChoice`、`makeSavePayload`、`loadPayload`、`showHistory` 等功能分别切成代码审查块。

推荐 chunk id：

```text
blueprint:ch2-s4:conflict
writing-guide:voice:lin
outline:ch8:choices
script:story:ch1-s1
script:runtime:selectChoice
framework:branching:insert
```

### 索引字段

每条索引记录建议包含：

```json
{
  "id": "blueprint:ch2-s4:conflict",
  "source": "docs/story-blueprint.md",
  "source_priority": 100,
  "kind": "canon|voice|outline|sample|story|runtime|asset|review",
  "chapter_id": "ch2",
  "section_id": "ch2-s4",
  "chapter_title": "第二章：雨线和误差",
  "section_title": "第一次争执",
  "character": ["zhou", "lin"],
  "variables": ["trust", "discipline"],
  "beats": ["第一次争执", "怕落后", "怕失控"],
  "constraints": ["单女主", "无狗血误会", "现实高中生活"],
  "risk_tags": ["voice", "variable", "repetition", "runtime"],
  "text": "原文或抽取后的正文",
  "summary": "一句话摘要",
  "line_start": 102,
  "line_end": 112
}
```

字段说明：

- `source_priority`：建议 `story-blueprint=100`、`writing-guide=90`、`story-outline=80`、`framework=70`、`script STORY=65`、`script runtime=60`、`README=40`、`draft=30`。
- `kind`：控制检索过滤。写正文时优先 `canon/voice/outline/sample/story`；审代码时优先 `framework/runtime/review`。
- `risk_tags`：供 story-lint 直接复用，如 `voice`、`variable`、`reality`、`dialogue`、`pacing`、`html_escape`、`save_compat`。
- `line_start/line_end`：便于输出可回查定位。

### 检索方式

使用混合检索：

1. 结构过滤：先按 `chapter_id`、`section_id`、`character`、`kind`、`risk_tags` 过滤。
2. 关键词检索：匹配中文标题、人物名、变量名、术语，如“初赛前夜”“林澈”“future_sync”“insert”“历史”。
3. 向量检索：召回语义相近的 canon、人物声音、样张和历史正文。
4. 重排：按 `source_priority`、同 section 命中、同角色命中、同变量命中、近期正文相似度排序。

建议检索包：

- 扩写某 section：`当前 section blueprint 1 条 + 同 chapter outline 1 条 + 相关人物声音 2-4 条 + 变量规则 1 条 + 当前 script section 1 条 + 相邻 section 2 条 + 样张 1-2 条`。
- 审稿某 section：`当前 section blueprint + 人物声音 + 台词质量基准 + 变量总规则 + 前后 section 摘要 + 已写正文重复候选`。
- 审 runtime：`framework 分支/存档说明 + script runtime 对应函数 + 既有代码审查块`。

### 输出格式

RAG 检索输出应是机器可读 JSON，避免只给散文摘要。

```json
{
  "query": "审 ch2-s4 第一次争执",
  "mode": "draft|lint|runtime_review",
  "context": [
    {
      "id": "blueprint:ch2-s4:conflict",
      "source": "docs/story-blueprint.md",
      "priority": 100,
      "reason": "当前 section canon",
      "summary": "周行为追进度跳过推导，林澈坚持条件完整；实质是怕落后对怕失控。",
      "quotes": ["亲近不是没有冲突，而是冲突后仍愿意理解对方恐惧。"]
    }
  ],
  "conflicts": [
    {
      "type": "canon_conflict",
      "sources": ["docs/story-outline.md", "docs/drafts/ch2.md"],
      "message": "draft 将顾望舒写成恋爱竞争者，违反单女主边界。"
    }
  ],
  "must_follow": [
    "林澈不是恋爱竞争者之外的任何副线女主；唯一恋爱主轴是周行与林澈。",
    "trust 增长必须绑定坦白脆弱或理解压力，不只绑定温柔台词。"
  ],
  "suggested_checks": ["voice", "variable", "reality", "dialogue", "pacing"]
}
```

审稿输出建议固定为：

```json
{
  "status": "pass|warn|fail",
  "findings": [
    {
      "severity": "P1|P2|P3",
      "rule": "voice.lin",
      "location": "ch2-s4 line 18",
      "message": "林澈这里直接说主题口号，不像她把感受转成条件/定义的说话方式。",
      "suggestion": "改为她抓住一个近似条件不放，再通过动作表现失控。"
    }
  ],
  "continuity_notes": [],
  "rewrite_hints": []
}
```

## 2. story-lint 审稿规则

### 人物声音

- 周行：第一人称旁白敏感、自嘲、嘴硬；台词比内心轻。压力下会用玩笑、效率或“为你好”绕开真实恐惧。禁止让他长期油滑、每句都接梗。
- 林澈：判断明确、克制、准确。情绪越强越倾向于抓条件、定义、推导、计划。禁止写成万能冷面学霸、恋爱脑、被拯救对象。
- 夏南星：社长式控场，能把情绪问题翻译成任务。玩笑用于调节节奏，不直接撮合到破坏细腻感。
- 顾望舒：成熟竞赛者，强调稳定性、前提、近似条件和边界。禁止写成反派、傲娇、恋爱竞争者。
- 所有角色：禁止连续概念化金句、口号式主题台词、为了告诉玩家而自报设定。

### 变量合理性

- `trust` 增长必须来自坦白脆弱、理解对方压力来源、尊重边界、冲突后回到问题本身。
- `discipline` 增长必须来自具体执行：错题分类、条件清单、限时策略、训练表复盘、睡眠调整。
- `future_sync` 第五章后才成为主轴，必须绑定志愿、专业、城市、关系边界的真实沟通。
- 负值选项不能只是“坏话”。它应是角色合理但有代价的策略，如回避、硬撑、替对方做决定。
- HE/BE 路线不能只靠最后一个选项翻盘。前期变量要在对白、场景修复速度、信息共享程度上可见。

### 现实约束

- 校园生活要具体：自习课、晚自习、社团表格、老师提醒、家长会、食堂、图书馆、楼顶观测都应有生活动作支撑。
- CNAO 和天文术语服务剧情，不写说明书式科普。术语必须出现在做题、观测、复盘、争执或升学选择中。
- 高中时间成本真实：训练、考试、睡眠、家长期望和主科排名不能被浪漫桥段轻易抹掉。
- 配角推动冲突，但不制造狗血误会、恶意反派或三角恋。
- 成绩变化来自长期执行和策略，不靠奇迹逆袭。

### 重复冲突

- 每章至少有一个新的压力来源或关系问题，不重复写“林澈焦虑、周行安慰”。
- 同类争执必须升级或变形：从做题方法，到家庭压力，到志愿路径，到真实选择。
- 重复道具要承担回收意义，如红笔、错题模板、空白星图、春季大曲线，不能只是装饰复现。
- 每个 section 至少推进一个信息点、一个关系状态变化或一个变量后果。
- 检测相邻 3 个 section 是否出现相同结构：限时失败 -> 安慰 -> 约定；若重复，标 P2。

### 台词质量

- 单句台词常规 18-45 个汉字；关键解释可到 60-80 字。连续短促有力句不得超过 3 句。
- 每 3-5 句台词之间插入具体动作、物件或环境反馈。
- 选项前必须铺垫周行为何犹豫，不能无压力地让玩家选择“正确答案”。
- 正常高中生对话允许迟疑、改口、补充和没说完的话。不要让每句都像宣传语。
- 抽象主题句一个 section 最多 1 句，且只应出现在章末、情绪顶点或共同符号回收处。

### 爆点与轻松桥段平衡

- 爆点来源优先：公开成绩、家庭志愿表、训练失误、情绪崩溃、真实志愿揭露、竞赛强者标准。
- 轻松桥段来源优先：刷题吐槽、社团杂务、食堂、自习室、天气、错题模板命名、夏南星控场。
- 每章至少 1-2 段轻松桥段，但情绪崩溃、决赛日、志愿表等高压段不强行插入笑点。
- 轻松桥段不能取消冲突后果。笑点之后必须回到行动、复盘或关系选择。
- 爆点之后必须有余波：行动变化、变量后果、对话变短/变诚实、下一节压力改变。

## 3. 当前 `script.js` 框架修复建议

### P1

1. `insert` 分支会替换掉原选择句。
   当前 `selectChoice()` 用 `slice(0, index) + inserted + slice(index + 1)`，会删除包含 `choice` 的原句。后果是回看、历史、存档和 lineKey 都失去玩家做选择的原进度节点。应改为保留原句，把插入段放在当前句之后，并把 `index` 推进到插入段第一句。还需要记录已消费选择，避免回到原选择句后重复选择。

2. 旧存档锁死完整 `runtimeScript`。
   `makeSavePayload()` 保存完整运行时队列，`loadPayload()` 优先恢复旧 `runtimeScript`。后续 30 万字扩写后，旧存档会读回旧文本、旧资源 key 和旧 bug。应只保存基础定位和选择记录，如 `lineKey`、`sectionId`、`state.choices`、`stats`、`log`；读档时用当前 `STORY` 重建基础脚本，再按选择记录重放短分支插入。`GAME_VERSION` 不兼容时给提示，不静默加载旧队列。

3. 长分支/结局跳转会把未读内容写进历史。
   `jumpToSection()` 调用 `resetLogToProgress(index)`，会把从开头到目标 section 前的所有行都塞进历史。若跳到 `ch8-bad`，可能把玩家没读过的中间内容也加入 history。历史应只记录真实播放过的行；场景重建应与历史重建解耦。

### P2

1. 历史面板 HTML 未转义。
   `showHistory()` 直接拼接 `item.speaker`、`item.sectionTitle`、`item.text` 到 `innerHTML`。当前文本来自本地仍可能因 `<`、`&` 显示错乱；未来若支持外部导入就是 XSS 风险。应使用 `escapeHtml()` 或 DOM API/textContent。

2. 存档槽点击即读写，删除和覆盖语义不清。
   当前点击槽位会立刻保存或读档，`DEL` 依赖选中状态但用户几乎没有先选中再删除的机会。建议改成点击只选中，明确按钮执行“写入/读取/删除”；覆盖非空槽前确认。

3. 逐字显示与选项渲染存在重复按钮风险。
   打字中快进和完成回调都可能调用 `renderChoices()`。建议 `renderChoices()` 开头清空 `choicePanel.innerHTML`，或给 `typeLine()` 回调加 token。

### P3

1. `rebuildScene()` 每次从第 0 行回放到目标行。
   30 万字规模下回看、读档、跳转会变慢。可在 build 阶段记录每个 section 起点或每 N 行的 scene snapshot，从最近快照回放。

2. `lineKey` 基于 section 内数组下标，扩写插入正文会降低存档稳定性。
   长期应给关键节点和选择句增加稳定 id，或在 build 时支持显式 `id`。旧存档只靠下标会在大规模改稿后漂移。

3. `GAME_VERSION` 仍是框架版本，不表达剧情 schema 兼容性。
   建议拆分 `ENGINE_VERSION` 和 `STORY_SCHEMA_VERSION`，存档迁移时分别判断 runtime 行为和剧情结构。

## 4. 30 万字正式扩写前的修复边界

必须在正式写 30 万字前修：

- `insert` 保留原选择句，并防止回看重复选择。
- 存档不再保存完整 `runtimeScript`，改为用当前 `STORY` + 选择记录恢复。
- 跳转不再把未读文本写入历史。
- 历史面板文本转义或改用 DOM API。
- story-lint 至少落地人物声音、变量合理性、重复冲突三类检查；否则长篇扩写时风格漂移和变量失真会很难回收。

可以后置：

- 存档槽交互重做和覆盖确认。
- 逐字显示重复按钮的时序加固。
- scene snapshot 性能优化。
- 显式稳定 line id 和存档迁移工具。
- 更复杂的向量检索重排、跨章节重复桥段检测和自动 rewrite hint。

正式扩写的最低门槛：P1 runtime 问题修完，RAG 能稳定召回当前 section canon、人物声音和变量规则，story-lint 能阻止单女主边界、变量奖励和角色口吻出现明显偏移。
