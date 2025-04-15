const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  loadAsset: (path) => ipcRenderer.invoke('load-asset', path)
})