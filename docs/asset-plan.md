# 《星图未定》资产规划与代码审查

本文档面向后续分章节扩写与 ImageGen 出图。当前不批量生成图片，先固定资产命名、复用策略、人物一致性规则和代码风险。

## 当前素材盘点

已可用背景：

- `classroom`：`assets/bg/classroom.png`，天文社教室/普通教室场景。
- `rooftop`：`assets/bg/rooftop-night.png`，夜间楼顶观测。
- `libraryRain`：`assets/bg/library-rain.png`，雨天图书馆。

已可用立绘：

- 林澈：`linNeutral`、`linSmile`、`linThinking`、`linCasual`；常服组 `linCasualNeutral`、`linCasualSmile`、`linCasualThinking`、`linCasualAnxious`、`linCasualPout`、`linCasualDowncast`、`linCasualTired`；夏季衬衫组 `linSummerNeutral`、`linSummerSmile`、`linSummerThinking`、`linSummerAnxious`、`linSummerPout`、`linSummerDowncast`、`linSummerTired`。
- 夏南星：`seniorSmile`。
- 顾望舒：`wangshuNeutral`。

缺口概览：

- 周行目前没有立绘。若全程第一人称可不补；若做 CG 或回忆插图，需要固定周行视觉锚点。
- 第 3 章后需要考试、集训、暑假、高三、志愿系统、大学尾声等新背景。
- 林澈需要焦虑、疲惫、崩溃后平静、冬装/高三便服/大学尾声服装差分。
- 夏南星和顾望舒至少各补 2-3 个表情，避免后期全靠单张立绘撑导师和竞争者戏份。

## 全 8 章插图/背景/立绘规划

### Chapter 1：春分前的星图

| Section | 背景 | 立绘差分 | CG 建议 |
| --- | --- | --- | --- |
| 1-1 错位的赤经差 | 复用 `classroom` | 林澈 `linNeutral`、`linThinking` | 无，常规相遇用立绘即可。 |
| 1-2 临时集训 | 复用 `classroom` | 林澈 `linSmile`，夏南星 `seniorSmile` | 无。 |
| 1-3 第一张训练表 | 复用 `classroom` | 林澈认真/微疲惫新增 `linFocused` | 小物件插图可选：训练表、星图纸、红笔。 |
| 1-4 楼顶的春季大曲线 | 复用 `rooftop` | 林澈 `linCasual`、`linSmile`，夏南星微笑 | 关键 CG 候选：楼顶并肩看角宿一，作为第一章收束图。 |

### Chapter 2：雨线和误差

| Section | 背景 | 立绘差分 | CG 建议 |
| --- | --- | --- | --- |
| 2-1 雨天限时卷 | 复用 `libraryRain` | 林澈 `linThinking`、新增 `linAnxious`，夏南星认真差分 `xiaSerious` | 无。 |
| 2-2 顾望舒的红笔 | 复用 `libraryRain` | 顾望舒 `wangshuNeutral`、新增 `wangshuSharp` | 小 CG 候选：红笔压在试卷近似条件上。 |
| 2-3 题库交换 | 复用 `libraryRain` 或 `classroom` | 林澈疲惫认真 `linFocused`，顾望舒淡笑 `wangshuSmallSmile` | 无。 |
| 2-4 第一次争执 | 复用 `classroom` 或雨后走廊新增 `corridorRain` | 林澈受伤/克制 `linHurt`，周行不出镜 | 爆点 CG 候选：桌上散开的推导纸，两人手停在同一处但没碰到。 |
| 2-5 雨停前的约定 | 复用 `libraryRain`，窗外转晴可后期加 `libraryAfterRain` | 林澈柔和 `linSoft` | 关键 CG 候选：林澈递笔记，周行递错题模板。 |

### Chapter 3：初赛倒计时

| Section | 背景 | 立绘差分 | CG 建议 |
| --- | --- | --- | --- |
| 3-1 三十天计划 | 新增 `clubRoomEvening` 或复用 `classroom` | 夏南星 `xiaSerious`，林澈疲惫 `linTired` | 无。 |
| 3-2 一次观测失败 | 新增 `rooftopCloudy` | 林澈雨衣/外套便服 `linOutdoor` | 关键 CG 候选：云层下记录无效数据，突出林澈真正热爱。 |
| 3-3 家长会后的沉默 | 新增 `schoolGateDusk` / `corridorEvening` | 林澈沉默 `linDowncast` | 无。 |
| 3-4 初赛前夜 | 新增 `stairwellNight` | 林澈崩溃 `linBreakdown`、平静后 `linRecovering` | 爆点 CG 必要：楼梯间低光，林澈坐在台阶上，周行在旁边不强行触碰。 |
| 3-5 初赛 | 新增 `examRoom` | 无或少量考场 cut-in | 结果揭晓可用小 CG：准考证/通过名单。 |

### Chapter 4：决赛轨道

| Section | 背景 | 立绘差分 | CG 建议 |
| --- | --- | --- | --- |
| 4-1 省队集训名单 | 新增 `trainingCampClassroom` | 林澈沉默 `linTense`，顾望舒 `wangshuSharp` | 无。 |
| 4-2 强者坐标系 | 复用 `trainingCampClassroom` | 顾望舒淡笑 `wangshuSmallSmile`，林澈不甘 `linFrustrated` | 无。 |
| 4-3 夜里的天文台 | 新增 `observatoryNight` | 林澈核心梦想用 `linSoft` 或便服外套 | 关键 CG 必要：天文台穹顶与土星环记忆感，是林澈人物核心图。 |
| 4-4 决赛日 | 新增 `contestHall` | 可不用立绘，重在试卷与时钟 | 爆点 CG 候选：林澈把难题拆小，草稿纸从混乱变清晰。 |
| 4-5 结果公布 | 新增 `resultBoard` | 林澈释然/空落 `linRelievedTired`，顾望舒平静 `wangshuNeutral` | 关键 CG 候选：公告栏前没有童话胜利，三人成绩错落。 |

### Chapter 5：去向决赛城市

| Section | 背景 | 立绘差分 | CG |
| --- | --- | --- | --- |
| 5-1 出发去车站 | `train-station-waiting-hall` | 林澈校服常态 | 无。 |
| 5-2 高铁上的题 | `high-speed-rail-carriage` | 林澈校服常态、思考 | `cg-ch5-train-window`：男女主火车近景并排，窗外风光与清新光线。 |
| 5-3 车窗外的土星环 | `high-speed-rail-carriage` | 林澈校服常态、轻微放松 | 复用火车背景，保持低细节密度。 |
| 5-4 报到和行李 | `coastal-city-day`、`competition-venue-gate`、`competition-checkin` | 夏南星、顾望舒、林澈常态 | 无。城市昼/昏/夜组需同一机位同一建筑。 |
| 5-5 海边夜谈 | `seaside-embankment-night` | 林澈便服 `linCasual` | `cg-ch5-lin-seaside-profile`：夜里海边林澈侧脸近景；`cg-ch5-lin-seaside-front`：正眼看向男主的近景版本。 |

已落地背景命名：

- `home-day.png`
- `train-station-waiting-hall.png`
- `high-speed-rail-carriage.png`
- `competition-venue-gate.png`
- `competition-checkin.png`
- `coastal-city-day.png`
- `coastal-city-dusk.png`
- `coastal-city-night.png`
- `hotel-room-day.png`
- `hotel-room-night.png`
- `seaside-embankment-night.png`

已落地 CG 命名：

- `cg-ch5-train-window.png`
- `cg-ch5-train-window-view.png`
- `cg-ch5-train-lin-looking.png`
- `cg-ch5-lin-seaside-profile.png`
- `cg-ch5-lin-seaside-front.png`

### Chapter 6：夏天的分数线

| Section | 背景 | 立绘差分 | CG 建议 |
| --- | --- | --- | --- |
| 6-1 暑假自习室 | 新增 `summerStudyRoom` | 林澈夏季便服 `linSummerCasual` | 关键 CG 候选：夏日自习室并排做题，关系升温但克制。 |
| 6-2 顾望舒的提前批建议 | 复用 `summerStudyRoom` 或新增 `cafeAfternoon` | 顾望舒便服 `wangshuCasual` | 无。 |
| 6-3 夏夜烟花与告白边缘 | 新增 `festivalNight` | 林澈夏夜便服 `linFestival` | 爆点 CG 必要：烟花下林澈先设边界，浪漫与克制并存。 |
| 6-4 模拟考崩盘 | 新增 `classroomNight` 或复用 `classroom` | 林澈焦急 `linAnxious`，周行不出镜 | 爆点 CG 候选：补救表压迫感，周行视角看向林澈。 |
| 6-5 重新定义“一起” | 新增 `busStopNight` / `walkwayNight` | 林澈柔和 `linSoft` | 关键 CG 候选：夜路并肩，中间留出距离但方向一致。 |

### Chapter 7：国家队集训（当前主线）

| Section | 背景 | 立绘差分 | CG 建议 |
| --- | --- | --- | --- |
| 7-1 通知没有写完 | 新增 `schoolHallAwardBoard`、复用 `homeEvening` | 林澈夏季校服 | `cgCh7NoticeAfterClass` |
| 7-2 候选营报到 | 新增 `trainStationSummer`、`campCheckinDesk`、`universityDormitory` | 林澈夏季校服、顾望舒、唐越 | `cgCh7CampCheckinLuggage` |
| 7-3 强者环境 | 新增 `trainingCampLectureHall`、`dataLabNight`、`dormCorridorNight` | 林澈思考/疲惫 | `cgCh7LectureHallFirstRow` |
| 7-4 三张表 | 新增 `observatoryControlRoom`、`telescopeFieldDusk` | 林澈思考 | `cgCh7DataLabSharedScreen` |
| 7-5 第一次掉队 | 复用考场与食堂、`vendingMachineNight` | 林澈焦虑/疲惫 | `cgCh7FailedObservationRun` |
| 7-6 名单确认 | 新增 `selectionResultBoard`、`campGateMorning` | 林澈夏季校服 | `cgCh7CandidateListConfirm` |

### Chapter 8：波兰的夏夜（当前主线）

| Section | 背景 | 立绘差分 | CG 建议 |
| --- | --- | --- | --- |
| 8-1 行李秤和护照夹 | 新增 `polandPrepDorm` | 林澈常服 | `cgCh8PolandPackingChecklist` |
| 8-2 登机口前 | 新增 `airportInternationalDepartures`、`airportBoardingGateNight` | 林澈常服 | `cgCh8AirportPassportExchange` |
| 8-3 云层上方的夜航 | 新增 `airplaneCabinNight`、`airplaneWindowClouds` | 林澈常服疲惫 | `cgCh8PlaneWindowLinZhou` |
| 8-4 抵达波兰 | 新增 `warsawAirportArrival`、`polishBusHighwayMorning`、`krakowHotelRoom`、`competitionVenuePolandGate` | 林澈疲惫 | 无 |
| 8-5 赛场里的两小时 | 新增 `competitionOpeningHallPoland`、`internationalExamRoom`、`observationFieldPolandNight`、`teamDiscussionRoomPoland` | 林澈常服/队服替代 | `cgCh8OpeningFlagHall`、`cgCh8PolandObservationField` |
| 8-6 维斯瓦河边 | 新增 `krakowOldTownDusk`、`vistulaRiverNight`、`resultCeremonyPoland` | 林澈常服微笑 | `cgCh8KrakowResultWalk` |

## CG 优先级

P0 必画爆点：

- `cg_ch3_stairwell_breakdown`：初赛前夜楼梯间，信任变量最强节点。
- `cg_ch4_observatory_dream`：林澈谈土星环，女主核心梦想图。
- `cg_ch6_fireworks_boundary`：烟花与告白边缘，恋爱边界节点。
- `cg_ch7_last_rooftop_chart`：最后一次楼顶观测，终局前价值观确认。
- `cg_ch8_volunteer_form`：志愿表分岔点。
- `cg_ch8_happy_remote_observation` / `cg_ch8_bad_unopened_astronomy_club`：结局定调图。

P1 可提升章节完成度：

- `cg_ch1_rooftop_spica`：第一章收束。
- `cg_ch2_notebook_exchange`：雨停前的约定。
- `cg_ch3_cloudy_failed_observation`：林澈真正热爱天文。
- `cg_ch4_result_board`：非童话式成绩。
- `cg_ch5_divergent_walkway`：第一次志愿分歧。
- `cg_ch6_summer_study_room`：暑假关系日常。

## 立绘差分清单

林澈优先新增：

- 常服差分已落地：`linCasualNeutral`、`linCasualSmile`、`linCasualThinking`、`linCasualAnxious`、`linCasualPout`、`linCasualDowncast`、`linCasualTired`。
- `linFocused`：校服，专注讲题，眉眼收紧。
- `linAnxious`：校服，手指攥纸或笔，眼神不稳。
- `linTired`：校服，睡眠不足，黑眼圈轻微。
- `linHurt`：校服，克制受伤，不流泪。
- `linBreakdown`：楼梯间/夜晚，情绪崩溃但不过度夸张。
- `linRecovering`：哭后平静，眼眶微红。
- `linSoft`：温和坚定，适合关键谈心。
- `linSummerCasual`：夏季便服，自习室。
- `linFestival`：夏夜便服，轻薄外套。
- `linSeniorUniform`：高三校服，可比早期更成熟克制。
- `linCollege` / `linCollegeSmile`：大学尾声。

夏南星优先新增：

- `xiaSerious`：社长/导师状态，拿平板或训练表。
- `xiaConcerned`：察觉两人状态不对，克制关心。
- `xiaGraduate`：毕业后交钥匙，便服或毕业季外套。

顾望舒优先新增：

- `wangshuSharp`：红笔指出问题，竞争者压迫感。
- `wangshuSmallSmile`：成熟但不嘲讽的淡笑。
- `wangshuCasual`：暑假提前批建议，便服。
- `wangshuTired`：可选，用于表现强者也会疲惫。

周行：

- 当前 VN 为男主第一人称，可不做常规立绘。
- 若 CG 出现，只出现侧脸、背影、手部、校服肩线即可，避免破坏第一人称代入。

## ImageGen Prompt 规范

### 全局风格

基础风格：

```text
high quality visual novel CG, modern Chinese high school setting, soft realistic anime style, clean linework, natural skin tone, restrained cinematic lighting, grounded everyday details, astronomy competition theme, 16:9 composition, no text, no watermark
```

背景统一：

```text
modern Chinese public high school, realistic classroom furniture, muted school colors, astronomy club props, star charts, notebooks, telescopes when relevant, believable lighting, not fantasy, not sci-fi spaceship
```

立绘统一：

```text
transparent background character sprite, full body, front-facing or three-quarter view, consistent proportions, same face identity, same hairstyle and eye color across expressions, visual novel sprite, no background, no text
```

负面约束通用：

```text
no extra fingers, no malformed hands, no duplicate character, no wrong school uniform, no heavy makeup, no exaggerated fantasy costume, no celebrity likeness, no watermark, no logo, no English or Chinese text rendered in image, no random symbols on paper, no animal ears, no chibi style
```

### 林澈视觉锚点

```text
Lin Che, Chinese high school girl, 17 years old, slim build, calm intelligent expression, short black bob haircut at jaw-to-shoulder length, neat bangs, blue-gray eyes, pale natural skin, small gold star hairpin on the viewer's right side of her hair, navy school blazer with white piping, white shirt, navy bow tie, navy pleated skirt with subtle astronomy/star trim, posture controlled and precise, often holding a black pen and a dark astronomy notebook or star chart
```

一致性要求：

- 发型保持“黑色及肩短发 / bob、整齐刘海、发尾微内扣”，不得画成长发、披肩长直发或明显换发型。
- 眼睛必须保持蓝灰色，不得改成棕色、红色、紫色或高饱和蓝色。
- 右侧金色星星发卡是女主识别锚点，校服 CG 和大部分关键 CG 必须保留；便服 CG 如不戴发卡，也要保持同一发型、眼睛和脸型。
- 校服必须是深蓝外套白色滚边、白衬衫、深蓝蝴蝶结和深蓝百褶裙；不要画成普通无装饰制服。
- 表情变化克制：焦虑靠眼神、手势、肩膀紧绷表现，不做夸张哭脸。
- 服装变化必须保留“干净、理性、低装饰”的人物气质。
- CG 中林澈优先占画面情绪中心，周行可用背影/手/视角位置辅助。

林澈负面约束：

```text
do not make her long-haired, do not make her below-shoulder hair, do not change her eye color, do not remove the star hairpin in school-uniform CG, do not make her blonde, do not make her wavy-haired, no twin tails, no gothic outfit, no idol styling, no seductive pose, no oversized eyes, no bright fantasy hair color, no adult office look
```

### 周行视觉锚点

```text
Zhou Xing, Chinese high school boy, 17 years old, average height and lean build, short dark hair, clean school uniform, reserved but warm presence, usually shown from first-person-adjacent angles, side profile, back view, or hands holding notebook, pencil, admission ticket, or star chart
```

一致性要求：

- 常规剧情不做立绘，CG 中尽量避免正面大特写。
- 视觉重点是“同伴感”和“选择压力”，不是偶像化男主。
- 手部、小臂、校服肩线、侧脸足够建立存在感。

周行负面约束：

```text
no overly muscular body, no delinquent styling, no dyed hair, no fantasy armor, no romantic kabedon pose, no adult beard, no celebrity likeness
```

### 夏南星视觉锚点

```text
Xia Nanxing, Chinese senior high school girl, 18 years old, astronomy club president, lively but competent, short to medium dark hair tied loosely or neat bob, red frame glasses as signature anchor, confident smile, school uniform worn slightly relaxed, often holding tablet, training schedule, or club key
```

一致性要求：

- 红框眼镜是强锚点，所有差分保留。
- 气质是“能把情绪问题拆成任务”的导师型学姐，不是搞笑役。
- 后期毕业差分可换便服，但保留红框眼镜和平板/钥匙道具。

夏南星负面约束：

```text
no childish mascot look, no lab coat, no teacher appearance, no exaggerated wink, no random hair color, no ornate accessories, no fantasy witch or idol costume
```

### 顾望舒视觉锚点

```text
Gu Wangshu, Chinese high school girl, 17-18 years old, external school astronomy competitor, composed and mature, long dark hair tied low or straight behind shoulders, sharp observant eyes, tidy uniform from another school, restrained expression, holding red pen and aligned papers, precise posture
```

一致性要求：

- 红笔、整齐试卷、对齐纸角是顾望舒的道具锚点。
- 气质是成熟竞赛者，不是恋爱竞争者或反派。
- 服装可与主角学校不同，但颜色和剪裁保持现实高中校服范围。

顾望舒负面约束：

```text
no villain smirk, no aggressive pointing, no luxury fashion, no teacher look, no fantasy color hair, no romantic rivalry framing, no excessive cold blue lighting
```

## 命名与落地规则

- 背景 key 使用地点加时间/天气：`rooftopCloudy`、`clubRoomNight`、`examGateSummer`。
- CG 文件建议：`assets/cg/cg_chapter_section_slug.png`，例如 `assets/cg/cg_ch3_stairwell_breakdown.png`。
- 立绘文件建议：`assets/char/lin-anxious.png`，key 使用 camelCase：`linAnxious`。
- 源图继续保存在 `assets/src/`，透明立绘进 `assets/char/`。
- 每章扩写前先确认本章 P0/P1 是否已有；没有时优先补背景，再补情绪立绘，最后补 CG。

## 代码审查发现

### P1：`insert` 分支会替换掉原选择句，导致选择句从运行时脚本中消失

位置：`script.js` 第 633-639 行。

当前逻辑把 `runtimeScript` 拼成 `slice(0, index) + inserted + slice(index + 1)`。这会删除包含 choice 的原句，使回看和存档后的运行时脚本不再包含玩家做选择的那句原文。现有第一章选择后，会直接停在插入台词处，原“……你也做天文奥赛？”这类选择句不再是进度节点。

建议修复：

- 选择后将 `index` 推进到插入段第一句，但不要删除原句。
- 拼接方式改为 `slice(0, index + 1) + inserted + slice(index + 1)`。
- 设置 `index += 1`，`progressIndex = index` 后渲染。
- 为避免返回选择句后重复选择，可在已选 lineKey 上标记 consumed，或在 review 状态不渲染 choice。

### P1：读档保存完整 `runtimeScript`，后续剧本扩写会让旧存档固化旧脚本

位置：`script.js` 第 781-789 行、第 864-866 行。

当前存档直接写入完整运行时数组。优点是短分支插入后可恢复，缺点是 A/B/主 agent 后续继续扩写 `STORY` 后，旧存档仍会读取旧的 `runtimeScript`，导致读档后看不到新章节文本、资源 key 或修复后的台词。

建议修复：

- 存档只保存 `sectionId`、`lineKey`、`index` 或“当前基础脚本 lineKey + 已选择分支记录”。
- 读档时先用当前 `STORY` 重建基础脚本，再按 `state.choices` 重放分支插入。
- 保留 `version`，当 `GAME_VERSION` 不兼容时提示“旧存档可能无法完全恢复”，而不是静默加载旧 runtime。

### P2：历史面板未转义台词和说话人，未来脚本文本含 `<`/`&` 时可能污染 DOM

位置：`script.js` 第 756-764 行。

`showHistory()` 使用模板字符串直接写 `item.speaker`、`item.sectionTitle`、`item.text`。剧本文本虽然来自本地，但后续 30 万字写作里出现 HTML 字符很常见，可能造成显示错乱；如果未来支持外部文本导入，会变成 XSS 风险。

建议修复：

- 用 `escapeHtml()` 包裹 `speaker`、`sectionTitle`、`text`。
- 或改为 DOM API 创建按钮和文本节点。

### P2：存档槽点击立即读档/写档，`DEL` 的“选中槽位”语义容易落空

位置：`script.js` 第 927-932 行。

点击槽位会先选中再立即执行保存或读档。`deleteSaveBtn` 依赖 `.selected`，但用户在读档模式点某个非空槽时会马上读档并关闭弹窗，几乎没有“先选中再删除”的机会。保存模式下误点空槽也会立即覆盖。

建议修复：

- 槽位点击只选中并展示详情。
- 增加“写入此槽 / 读取此槽 / 删除此槽”的明确按钮。
- 若保持快速点击，至少写档覆盖非空槽前加确认。

### P2：`jumpToSection()` 会重建历史到目标 index，跳过文本也进入回看

位置：`script.js` 第 670-676 行、第 738-753 行。

终局跳转或长分支跳转时，`resetLogToProgress(index)` 会把从开头到目标 section 之前的所有运行时台词加入历史，包括玩家没有实际读过的骨架或被跳过 section。当前结构里 `ch8-bad` 在 `ch8-happy` 后面，直接跳 bad 可能把 happy 骨架也加入 log。

建议修复：

- 历史只记录真实播放过的行，不在跳转时按 index 重建。
- 跳转时保留现有 `log`，只更新 `index/progressIndex`。
- 如果需要场景重建，单独用 `rebuildScene(index)`，不要把场景重建和历史重建绑定。

### P2：逐字显示完成时可能重复渲染选项按钮

位置：`script.js` 第 679-684 行。

打字中点击会 `stopTyping(true)` 并立即 `renderChoices()`，但原 `typeLine` 计时器的完成回调在极端时序下仍可能执行 `afterText()`，造成重复按钮。概率不高，但后续自动播放和快进频繁使用时会放大。

建议修复：

- `renderChoices()` 开头先清空 `choicePanel.innerHTML`。
- 或为每次 `typeLine` 分配 token，过期回调不再执行。

### P3：场景重建按从 0 到 targetIndex 回放，30 万字规模下可能变慢

位置：`script.js` 第 517-522 行。

每次回看、读档、跳转都从开头回放所有 `bg/show/img/clear` 指令。短篇原型没问题，但 8 章 30 万字会显著增加 DOM 操作。

建议修复：

- 构建脚本时记录每个 line 的 scene snapshot，或至少记录每个 section 起点的背景和立绘状态。
- `rebuildScene()` 从最近 section 起点或 snapshot 开始回放，而不是从 0 开始。

## 扩写前建议修复顺序

1. 先修 `insert` 保留原选择句，否则后续所有短分支都会污染进度和回看。
2. 再修历史跳转/长分支跳转的 log 重建，避免结局分支把未读内容塞入历史。
3. 再调整存档 payload，避免扩写后旧存档锁死旧 runtime。
4. 最后做历史 HTML 转义、存档槽交互确认、场景 snapshot 优化。

本轮未生成 ImageGen 图片。
