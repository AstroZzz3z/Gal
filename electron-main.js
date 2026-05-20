const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");
const path = require("node:path");

const imageExtensions = new Set([".apng", ".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const assetFolders = {
  theater: path.join("assets", "theater"),
};
const assetWatchers = new Set();

function toAssetSrc(kind, filename) {
  return path.posix.join("assets", kind, filename);
}

function toAssetKey(filename) {
  const stem = path.basename(filename, path.extname(filename));
  const parts = stem.split(/[^a-zA-Z0-9]+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) {
    const [part] = parts;
    if (/^[A-Z0-9]+$/.test(part)) return part;
    return part.charAt(0).toLowerCase() + part.slice(1);
  }
  return parts
    .map((part, index) => {
      const lower = part.toLowerCase();
      return index === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
}

async function listAssets(kind) {
  const folder = assetFolders[kind];
  if (!folder) return [];
  const directory = path.join(app.getAppPath(), folder);
  try {
    const entries = await fsPromises.readdir(directory, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => ({
        key: toAssetKey(entry.name),
        src: toAssetSrc(kind, entry.name),
      }))
      .filter((asset) => asset.key && asset.src)
      .sort((a, b) => a.src.localeCompare(b.src, "zh-CN"));
  } catch {
    return [];
  }
}

function watchAssets(win) {
  Object.entries(assetFolders).forEach(([kind, folder]) => {
    const directory = path.join(app.getAppPath(), folder);
    try {
      const watcher = fs.watch(directory, { persistent: false }, () => {
        if (!win.isDestroyed()) win.webContents.send("assets:changed", kind);
      });
      assetWatchers.add(watcher);
    } catch {
      // Packaged or missing asset folders may not be watchable; startup scanning still works.
    }
  });
  win.on("closed", () => {
    assetWatchers.forEach((watcher) => watcher.close());
    assetWatchers.clear();
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 540,
    backgroundColor: "#05070d",
    title: "星图未定",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "index.html"));
  watchAssets(win);
}

app.whenReady().then(() => {
  ipcMain.handle("assets:list", (_event, kind) => listAssets(kind));
  Menu.setApplicationMenu(null);
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
