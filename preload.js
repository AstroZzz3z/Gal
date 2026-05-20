const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("hoshizuAssets", {
  list(kind) {
    return ipcRenderer.invoke("assets:list", kind);
  },
  onChanged(callback) {
    if (typeof callback !== "function") return () => {};
    const handler = (_event, kind) => callback(kind);
    ipcRenderer.on("assets:changed", handler);
    return () => ipcRenderer.removeListener("assets:changed", handler);
  },
});
