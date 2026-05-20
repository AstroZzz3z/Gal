# 星图未定

全年龄短篇 galgame 原型。主线是男主周行备赛 CNAO 时遇到女主林澈，二人加入天文社集训并向全国决赛前进。

## 运行

在 macOS 上双击 `index.html`，或在终端执行：

```bash
open index.html
```

本地应用模式：

```bash
npm install
npm start
```

打包分享：

```bash
npm run dist:mac
npm run dist:win
npm run dist:win:x64
```

构建产物会输出到 `release/`。macOS 包为 `.dmg/.zip`，Windows 包为便携版和安装包。跨平台打包依赖 Electron Builder；如果在 macOS 上构建 Windows 安装包遇到 NSIS/Wine 限制，可以在 Windows 机器上运行同样的 `npm run dist:win`。

## 当前内容

- 第一章到第八章正文
- 女主林澈：校服常态、微笑、认真、便服差分
- 配角夏南星：社长立绘
- 二号女主顾望舒：竞赛对手立绘
- 背景：天文社教室、夜间楼顶观测、雨天图书馆
- VN 功能：标题菜单、点击推进、逐字显示、点击快进当前句、上一句、滚轮回看、历史跳转、返回当前进度、自动播放、多槽位存档/读档、自动继续、CG 鉴赏、立绘鉴赏、变量选项、结局判定
- 剧情结构：8 个 chapter、每章 4-5 个 section；正文主要维护在 `docs/drafts/`，同步到 `script.js` 的 `STORY.chapters[].sections[].lines[]`
- 隐藏变量：`trust`、`discipline`、`future_sync`，用于导向 Happy Ending / Bad Ending

## 素材

项目使用 `$imagegen` 生成背景和立绘。透明立绘由色键图本地抠图得到，源图保存在 `assets/src/`，实际游戏使用 `assets/char/`。

## 写作期 RAG

构建索引：

```bash
node tools/rag-build.js
```

按草稿或 section 审稿：

```bash
node tools/story-lint.js --file docs/drafts/chapter1.md --section ch1
node tools/story-lint.js --query "林澈 ch2-s4 第一次争执"
```

RAG 只用于写作、审稿和一致性检查，不进入游戏运行时。
