# Chapter 2-3 集成审查

范围：面向 Chapter 2「雨线和误差」与 Chapter 3「初赛倒计时」正式集成前的资产、ImageGen、runtime 风险与测试清单。本文只审查与集成相关的新增需求，不修改 `script.js`、`index.html`、`styles.css` 或 `assets`。

## 1. 资产优先级

### P0：集成前必须补齐

1. 背景 `stairwellNight`
   - 用途：`ch3-s4` 初赛前夜，林澈楼梯间崩溃。
   - 原因：这是 Chapter 3 信任变量最强节点，也是资产规划里的 P0 CG 所在场景；若没有独立背景，会被迫复用教室/图书馆，削弱爆点。
   - 建议文件/key：`assets/bg/stairwell-night.png`，key `stairwellNight`。

2. 立绘 `linBreakdown`、`linRecovering`
   - 用途：`ch3-s4` 崩溃与冷静后的差分。
   - 原因：现有林澈只有 `linNeutral`、`linSmile`、`linThinking`、`linCasual`，无法承载“崩溃但不夸张”和“哭后平静”的变化。
   - 建议文件/key：`assets/char/lin-breakdown.png` -> `linBreakdown`；`assets/char/lin-recovering.png` -> `linRecovering`。

3. CG `cg_ch3_stairwell_breakdown`
   - 用途：`ch3-s4` 初赛前夜爆点。
   - 原因：资产计划已列为全篇 P0。画面应表现周行陪她坐到冷静，不要强行触碰或偶像剧构图。
   - 建议文件/key：`assets/cg/cg_ch3_stairwell_breakdown.png`，key `cgCh3StairwellBreakdown` 或保持 `cg_ch3_stairwell_breakdown`，但需与最终资源映射一致。

4. 背景 `rooftopCloudy`
   - 用途：`ch3-s2` 一次观测失败。
   - 原因：Chapter 3 要从雨天图书馆转向“云层导致无效数据”的观测失败，不能继续复用晴朗 `rooftop`，否则场景逻辑不成立。
   - 建议文件/key：`assets/bg/rooftop-cloudy.png`，key `rooftopCloudy`。

### P1：强烈建议补齐

1. 立绘 `linAnxious`、`linTired`
   - 用途：`ch2-s1` 雨天限时卷、`ch3-s1` 三十天计划。
   - 原因：Chapter 2-3 的林澈压力递增需要从“思考”分离出“焦虑”和“疲惫”，否则所有高压段都会落在 `linThinking` 上。

2. 立绘 `linHurt`、`linSoft`
   - 用途：`ch2-s4` 第一次争执、`ch2-s5` 雨停前约定。
   - 原因：第二章需要从裂纹到修复的表情曲线。`linHurt` 要克制受伤，`linSoft` 要温和坚定，不应甜化过度。

3. 立绘 `wangshuSharp`、`wangshuSmallSmile`
   - 用途：`ch2-s2` 顾望舒红笔、`ch2-s3` 题库交换。
   - 原因：现有 `wangshuNeutral` 只能表现登场，无法表现外部强者压迫和成熟边界。顾望舒必须是竞赛镜像，不是反派或恋爱竞争者。

4. 立绘 `xiaSerious`、`xiaConcerned`
   - 用途：`ch2-s1` 限时训练、`ch3-s1` 三十天计划、`ch3-s4` 爆点余波。
   - 原因：现有 `seniorSmile` 会让训练管理和关心场景过轻，影响夏南星“把情绪翻译成任务”的导师功能。

5. 背景 `schoolGateDusk` 或 `corridorEvening`
   - 用途：`ch3-s3` 家长会后的沉默。
   - 原因：家庭压力首次进入故事，建议给独立黄昏/走廊场景，避免继续用图书馆承载所有压力。

6. 背景 `examRoom`
   - 用途：`ch3-s5` 初赛。
   - 原因：Chapter 3 章末必须推进到初赛当天，正式集成不宜继续用 system 骨架或旧教室背景代替考试空间。

7. CG `cg_ch3_cloudy_failed_observation`
   - 用途：`ch3-s2` 观测失败。
   - 原因：这是 Chapter 3 的 P1 核心图，用来显示林澈不是只为竞赛分数而学天文，而是会认真记录“无效数据”。

### P2：可后置但会提升完成度

1. 背景 `corridorRain` 或 `libraryAfterRain`
   - 用途：`ch2-s4` 争执、`ch2-s5` 雨停前约定。
   - 原因：第二章主意象是雨线。若只能复用 `libraryRain`，可运行但场景变化少。

2. CG `cg_ch2_red_pen_paper`
   - 用途：`ch2-s2` 顾望舒指出近似条件。
   - 原因：红笔是顾望舒道具锚点，小 CG 能强化“校准”而非“羞辱”。

3. CG `cg_ch2_notebook_exchange`
   - 用途：`ch2-s5` 雨停前的约定。
   - 原因：资产计划列为 P1。若工期紧，可先用立绘和道具描写替代，后续补图。

4. CG `cg_ch2_scattered_derivation`
   - 用途：`ch2-s4` 第一次争执。
   - 原因：两人手停在同一处但没碰到，适合表现关系裂纹；优先级低于 Chapter 3 楼梯间 P0。

5. 小物件 cut-in：准考证/通过名单
   - 用途：`ch3-s5` 初赛结果。
   - 原因：可作为章末转场，但不影响主线可运行。

## 2. ImageGen Prompt 约束

### 全局约束

所有 Chapter 2-3 新图统一追加：

```text
high quality visual novel CG, modern Chinese high school setting, soft realistic anime style, clean linework, natural skin tone, restrained cinematic lighting, grounded everyday details, astronomy competition theme, 16:9 composition for backgrounds and CG, no text, no watermark
```

背景图追加：

```text
modern Chinese public high school, realistic classroom furniture or school architecture, muted school colors, believable lighting, astronomy club props only when relevant, not fantasy, not sci-fi spaceship, no readable signs or random text
```

立绘追加：

```text
transparent background character sprite, full body, front-facing or three-quarter view, consistent proportions, same face identity, same hairstyle and eye color across expressions, visual novel sprite, no background, no text
```

通用负面：

```text
no extra fingers, no malformed hands, no duplicate character, no wrong school uniform, no heavy makeup, no exaggerated fantasy costume, no celebrity likeness, no watermark, no logo, no English or Chinese text rendered in image, no random symbols on paper, no animal ears, no chibi style
```

### 林澈一致性

基础锚点必须每次保留：

```text
Lin Che, Chinese high school girl, 17 years old, slim build, calm intelligent expression, straight dark black hair slightly below shoulders, neat side bangs, clear dark brown eyes, pale natural skin, understated school uniform, clean white shirt and navy school jacket or vest, no jewelry except optional simple hair clip, posture controlled and precise, often holding pencil, notebook, or star chart
```

差分约束：

- `linAnxious`：焦虑靠眼神不稳、手指攥纸或笔、肩膀紧绷表现；不要大哭或夸张张嘴。
- `linTired`：轻微黑眼圈、睡眠不足、姿态仍努力维持整齐；不要病弱化。
- `linHurt`：克制受伤，嘴唇微抿、视线短暂避开；不要泪流满面。
- `linBreakdown`：夜晚楼梯间情绪崩溃，坐姿收紧、眼眶红、控制失败但不歇斯底里。
- `linRecovering`：哭后平静，眼眶微红，语气和姿态回到准确克制。
- `linSoft`：温和坚定，适合“把问题拆小”的约定，不能变成撒娇或恋爱脑。
- `linOutdoor`：外套/雨衣便服也要保持干净、理性、低装饰。

林澈负面：

```text
do not make her blonde, do not make her wavy-haired, no twin tails, no gothic outfit, no idol styling, no seductive pose, no oversized eyes, no bright fantasy hair color, no adult office look
```

### 顾望舒一致性

基础锚点：

```text
Gu Wangshu, Chinese high school girl, 17-18 years old, external school astronomy competitor, composed and mature, long dark hair tied low or straight behind shoulders, sharp observant eyes, tidy uniform from another school, restrained expression, holding red pen and aligned papers, precise posture
```

差分约束：

- `wangshuSharp`：红笔和对齐试卷是主要压迫感，表情冷静准确；不要指脸、嘲讽或反派笑。
- `wangshuSmallSmile`：成熟淡笑，只表示认可方法或边界；不要暧昧、挑衅、傲娇。
- 服装可区别于主角学校，但必须在现实高中校服范围内。

顾望舒负面：

```text
no villain smirk, no aggressive pointing, no luxury fashion, no teacher look, no fantasy color hair, no romantic rivalry framing, no excessive cold blue lighting
```

### 夏南星一致性

基础锚点：

```text
Xia Nanxing, Chinese senior high school girl, 18 years old, astronomy club president, lively but competent, short to medium dark hair tied loosely or neat bob, red frame glasses as signature anchor, confident smile, school uniform worn slightly relaxed, often holding tablet, training schedule, or club key
```

差分约束：

- 红框眼镜必须保留，是夏南星最强身份锚点。
- `xiaSerious`：收掉笑意、拿平板或训练表，社长控场，不像老师训话。
- `xiaConcerned`：克制关心，像在评估训练状态并准备拆任务，不直接煽情或撮合。
- 不把她画成搞笑役、偶像学姐或成人教师。

夏南星负面：

```text
no childish mascot look, no lab coat, no teacher appearance, no exaggerated wink, no random hair color, no ornate accessories, no fantasy witch or idol costume
```

### 周行在 CG 中的边界

Chapter 2-3 若 CG 出现周行，优先使用第一人称邻近视角：

```text
Zhou Xing, Chinese high school boy, 17 years old, average height and lean build, short dark hair, clean school uniform, reserved but warm presence, shown from side profile, back view, shoulder line, or hands holding notebook, pencil, admission ticket, or star chart
```

禁止正面偶像化大特写、壁咚式构图、过度亲密接触。`cg_ch3_stairwell_breakdown` 中周行应坐在旁边或稍低处陪伴，手可放在膝上/递纸巾/拿错题模板，不强行触碰林澈。

## 3. `script.js` 集成风险

### P0：正式集成前必须处理或规避

1. 资源 key 未扩展会导致图片静默缺失
   - 位置：`script.js` 第 5-20 行。
   - 风险：当前只有 `classroom`、`clubroom`、`rooftop`、`libraryRain` 和 6 张立绘。若 A/B 正文直接使用 `stairwellNight`、`rooftopCloudy`、`linAnxious`、`linBreakdown` 等 key，而主集成未同步补 `assets` 映射，`setBg()`/`showSprite()` 会拿到 `undefined`，浏览器表现为空图或旧图残留。
   - 建议：主 agent 集成时建立资源 key 对照表，先注册 key，再粘贴正文。合入前跑一次“扫描 STORY 中 bg/img/show.img 是否都在 assets 中”的脚本。

2. `insert` 分支仍会替换当前选择行并重建历史
   - 位置：`selectChoice()` 第 2497-2506 行，`resetLogToProgress()` 第 2604-2620 行。
   - 风险：当前实现把当前 choice 行复制成无 choice 行，再插入分支并替换原位置；玩家回看时不会重复选择，这是优点。但每次 insert 都调用 `resetLogToProgress(index + 1)`，会把从开头到当前进度的所有文本重新灌入历史。Chapter 2-3 正式扩写后，历史不再严格等于“真实读过的行”，并且长篇 insert 后 log 会丢失原有真实浏览顺序。
   - 建议：集成前至少确认这种行为可接受；更稳妥是保留真实 log，只追加当前选择行和插入行，不通过全量回放重建 history。

3. 当前 ch2/ch3 多数仍是骨架，正式正文替换时不能只增补片段
   - 位置：`ch2-s3` 起仍有 `Section 骨架`，`ch3-s1` 到 `ch3-s5` 均为骨架。
   - 风险：如果主集成只把 A/B 片段插到骨架后面，会出现 system 骨架文本在正式游戏中可见，RAG lint 也会把骨架当正文检索。
   - 建议：正式集成时按 section 整段替换 `lines`，不要保留 `speaker: "system"` 的骨架占位，除非是章标题提示。

### P1：强烈建议集成同步检查

1. 存档结构已比旧版安全，但 `lineKey` 对大规模改稿仍脆弱
   - 位置：`buildRuntimeScript()` 生成 `lineKey: ${section.id}:${lineIndex}`；读档见第 2731-2743 行。
   - 现状：当前存档不再保存完整 `runtimeScript`，读档会用当前 `STORY` 重建并 `replayChoices()`，这是正确方向。
   - 风险：`lineKey` 依赖 section 内数组下标。Chapter 2-3 正式扩写后，如果玩家旧存档指向同一 section 的旧下标，读档可能落到语义不同的台词。
   - 建议：正式集成当天最好清理旧开发存档，或提升 `GAME_VERSION`/`SAVE_KEY`；长期给关键选择行和章节入口加稳定 id。

2. `replayChoices()` 对选项文本强依赖
   - 位置：第 2746-2770 行。
   - 风险：存档重放通过 `record.text` 匹配选项。如果正式集成修改选项文案，旧存档选择无法重放，变量和 insert 分支会丢。
   - 建议：主集成后若仍要兼容旧存档，需保留选项文本或增加稳定 `choice.id`。若不兼容，明确 bump 存档版本。

3. 跳转历史风险已降低，但结局跳转仍需回归测
   - 位置：`jumpToSection()` 第 2537-2543 行。
   - 现状：当前 `jumpToSection()` 不再调用 `resetLogToProgress()`，不会把 Happy Ending 未读文本塞入 Bad Ending 历史，这点优于旧审查。
   - 风险：`progressIndex = Math.max(progressIndex, index)` 对向后跳转可用；若未来 Chapter 2-3 加 `target` 回跳或支线跳转，review/progress 状态可能不符合预期。
   - 建议：Chapter 2-3 只使用短 `insert`，不要引入跨 section `target`，除非同步写跳转测试。

4. 逐字显示后选项重复渲染风险仍在
   - 位置：`renderChoices()` 第 2475-2484 行，`next()` 第 2545-2550 行。
   - 风险：`render()` 开始会清空 choicePanel，但 `renderChoices()` 本身不清空。打字中点击快进和完成回调极端重入时，可能重复按钮。
   - 建议：正式集成高压 section 选项多时，在 `renderChoices()` 开头加清空；本轮不改代码则测试中重点快点/连点选项。

5. 资源加载失败没有 lint 或报错
   - 位置：`setBg()`、`showSprite()`。
   - 风险：不存在的 key 不会抛出清晰错误，集成后容易漏图。
   - 建议：RAG/story-lint 或集成脚本增加 `asset_key_missing` 检查：扫描所有 `bg`、`show[].img`、`img`，与 `assets.bg`/`assets.char` 对比。

### P2：可后置

1. `rebuildScene()` 从 0 回放到当前行
   - 位置：第 2381-2386 行。
   - 风险：Chapter 2-3 正式扩写后仍可接受，但 8 章 30 万字时回看、读档会变慢。
   - 建议：后续做 section 起点快照。

2. 存档槽点击即保存/读取
   - 位置：第 2711-2729 行与槽位点击事件。
   - 风险：覆盖和删除语义不清。对 Chapter 2-3 集成不是阻塞，但测试存档时容易误操作。

3. 历史 HTML 转义已修，但继续保持 lint
   - 位置：第 2622-2630 行使用 `escapeHtml()`。
   - 建议：RAG lint 仍应检查正文中 `<`、`&`、疑似 HTML 字符的显示，防止未来新增面板绕过转义。

## 4. RAG / story-lint 集成重点

Chapter 2-3 正式集成后，RAG lint 至少检查以下规则：

1. `asset_key_missing`
   - 所有 `bg`、`img`、`show[].img` 必须存在于 `assets` 映射。
   - P0/P1 新 key 未接入时直接 fail。

2. `no_system_stub`
   - `ch2-s3` 到 `ch3-s5` 正式正文中不得残留“Section 骨架”。
   - 章标题 system 可保留，但不能代替剧情。

3. `voice.lin`
   - 林澈情绪越强越准确，崩溃也应是自我否定的冷静化表达，不写成被周行拯救的哭泣对象。

4. `voice.wangshu`
   - 顾望舒是成熟竞赛者。禁止反派化、傲娇化、恋爱竞争化。

5. `voice.xia`
   - 夏南星把情绪问题转成任务。她可调节节奏，但不能粗暴撮合周行和林澈。

6. `variable.trust`
   - `trust` 加分必须来自坦白脆弱、理解压力来源、尊重边界，尤其 `ch2-s4` 与 `ch3-s4`。

7. `variable.discipline`
   - `discipline` 加分必须来自复盘、条件清单、限时策略、训练表、休息调整，不是单纯“努力”。

8. `repetition`
   - Chapter 2 的雨线/误差与 Chapter 3 的倒计时/家庭压力必须是升级关系，不重复“林澈焦虑、周行安慰”。

9. `reality`
   - CNAO、训练、家长会和初赛只写可占位的现实细节，不写未经核验的官方赛制、保送、具体政策。

## 5. 集成后测试清单

### 推进到章节末

- 从新游戏开始，正常推进到 `ch2-s1`、`ch2-s5`、`ch3-s5`，确认没有骨架文本残留。
- 每个 section 起始背景正确切换；`clear: true` 的场景不会残留上一节立绘。
- `ch3-s4` 能显示楼梯间背景、林澈崩溃/恢复差分和 P0 CG。
- `ch3-s5` 初赛结束后能自然进入 `ch4-s1`，没有卡在 choice 行。

### 选项变量

- `ch2-s1`：复盘错题 -> `discipline +1`；安慰焦虑 -> `trust +1`。
- `ch2-s2`：补完整推导 -> `trust +1, discipline +1`；请顾望舒指出易错点 -> `discipline +1`。
- `ch2-s4`：承认急着追分 -> `trust +1`；先过初赛 -> `discipline +1, trust -1`。
- `ch3-s1`：提醒休息 -> `trust +1`；继续冲刺 -> `discipline +1`。
- `ch3-s3`：主动说家庭压力 -> `trust +1`；隐瞒压力 -> `trust -1, discipline +1`。
- `ch3-s4`：陪她坐到冷静 -> `trust +2`；用目标激励 -> `discipline +1, trust -1`。
- 每条选项都测试一次读档后变量是否保持，并确认 `state.choices` 不重复累加。

### 存档读档

- 在 `ch2-s1` 选项前存档，读档后选项仍可点。
- 在 `ch2-s4` 插入分支中途存档，读档后应回到同一句或合理相邻位置，已选分支不丢。
- 在 `ch3-s4` 爆点前、爆点选项后、`ch3-s5` 章末各存一次，读档验证背景、立绘、历史、变量。
- 正式集成后若 bump `GAME_VERSION` 或 `SAVE_KEY`，验证旧开发存档不会静默落到错位文本。

### 图片加载

- 浏览器 Network/Console 中无 404、无 `undefined` 图片请求。
- 扫描 `STORY` 中所有 `bg`、`show[].img`、`img`，确保 key 在 `assets` 中。
- P0 场景逐项确认：`stairwellNight`、`linBreakdown`、`linRecovering`、`cg_ch3_stairwell_breakdown`、`rooftopCloudy`。
- P1 立绘逐项确认：`linAnxious`、`linTired`、`linHurt`、`linSoft`、`wangshuSharp`、`wangshuSmallSmile`、`xiaSerious`、`xiaConcerned`。

### 历史与跳转

- 每个带 `insert` 的选项选择后打开历史，确认历史顺序可读，未出现大量未读后文。
- 回看到选项前一句，再返回进度，确认不会重复渲染选项或重复加变量。
- 快速点击/空格跳过打字时，选项按钮不重复。
- Chapter 2-3 不建议新增跨 section `target`；若新增，必须测试历史不会包含未读 section。

### RAG lint

- 运行 `asset_key_missing`，结果必须为 pass。
- 运行 `no_system_stub`，正式 ch2/ch3 必须无骨架残留。
- 运行 `voice.lin`、`voice.xia`、`voice.wangshu`，重点查 `ch2-s2`、`ch2-s4`、`ch3-s4`。
- 运行 `variable.trust`、`variable.discipline`，检查每个选项奖励是否与具体行动绑定。
- 运行 `repetition`，检查 Chapter 2-3 不连续复用“失败 -> 安慰 -> 约定”的同一结构。
- 运行 `reality`，检查初赛、家长会、训练安排没有未核验政策细节。

## 6. 核心结论

- P0 资产必须先保 `ch3-s4` 楼梯间爆点：`stairwellNight`、`linBreakdown`、`linRecovering`、`cg_ch3_stairwell_breakdown`；其次补 `rooftopCloudy` 支撑 `ch3-s2`。
- Chapter 2 的最低可运行资产可复用 `libraryRain`，但正式观感需要林澈压力差分、顾望舒红笔差分和雨停修复场景。
- 当前 runtime 已缓解旧版“完整 runtime 存档”和“结局跳转灌历史”的大风险，但资源 key、骨架残留、insert 重建历史、lineKey/choice 文本存档兼容仍是正式集成前检查重点。
- RAG/story-lint 必须把资产 key、骨架残留、人物声音、变量合理性和重复冲突作为 Chapter 2-3 的入库门槛。
