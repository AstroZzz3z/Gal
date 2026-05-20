# 游戏框架说明

## 剧情数据

剧情入口在 `script.js` 的 `STORY` 对象：

```js
STORY.chapters[].sections[].lines[]
```

推荐后续只改这里：

- `chapter.id`：章节 ID，例如 `ch1`
- `chapter.title`：章节标题
- `section.id`：小节 ID，例如 `ch1-s1`
- `section.title`：小节标题
- `lines`：实际台词和演出指令

## 单句格式

常用字段：

```js
{
  bg: "classroom",
  clear: true,
  show: [{ id: "lin", img: "linNeutral", pos: "right" }],
  img: "linSmile",
  speaker: "lin",
  focus: "lin",
  text: "台词",
}
```

- `bg`：切换背景。
- `clear`：清空当前立绘。
- `show`：显示一个或多个角色。
- `img`：替换当前角色差分，默认替换 `focus` 指向的角色。
- `speaker`：说话人 ID，对应 `names`。
- `focus`：当前高亮角色，其他角色会变暗。
- `text`：显示文本。
- `end`：结局末尾使用，阻止继续推进。

## 选项与变量

选项写在某句的 `choice` 字段：

```js
choice: [
  {
    text: "主动告诉林澈家里的反对。",
    effects: { trust: 1, future_sync: 1 },
  },
]
```

当前隐藏变量：

- `trust`：互信
- `discipline`：执行
- `future_sync`：未来同步

变量初始值在 `initialStats`。

## 分支

短分支用 `insert`，会把选择后的短对白插入当前播放队列：

```js
{
  text: "接受林澈指出的错误。",
  effects: { trust: 1 },
  insert: [
    { speaker: "zhou", text: "你说得对。这个地方我确实混了。" },
  ],
}
```

长分支或结局用 `target` 跳到 section：

```js
{ text: "隐瞒志愿。", effects: { trust: -2 }, target: "ch8-bad" }
```

终局自动判定用：

```js
{ text: "说出真实志愿。", effects: { trust: 1 }, endingCheck: true }
```

判定函数是 `resolveEndingTarget()`。当前 Happy Ending 条件：

```js
trust >= 5 && discipline >= 4 && future_sync >= 4
```

## 存档

存档使用浏览器 `localStorage`，键名：

```text
hoshizu-save-slots-v1
```

目前支持 8 个槽位。每个槽位保存：

- 当前进度 index
- 当前运行时剧情队列
- 三个隐藏变量
- 已选选项
- 历史记录
- 存档预览文本
- 保存时间

后续打包成 Electron/Tauri 时，可以把同一份 payload 写入 macOS 的应用数据目录。

## 写作期 RAG

RAG 工具只用于开发期，不参与玩家运行时。

```bash
node tools/rag-build.js
node tools/story-lint.js --file docs/drafts/chapter1.md --section ch1
```

- `.rag/index.json` 是本地检索索引，可随时重建。
- `docs/canon/` 是优先检索的设定资料库。
- `docs/drafts/` 放正式台词草稿。
- `story-lint` 会检查人物声音、变量合理性、现实约束、台词质量和重复冲突。
