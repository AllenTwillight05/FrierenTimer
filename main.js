const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    maximizable: true,
    fullscreenable: true,
    fullscreen: false,
    autoHideMenuBar: true,
    frame: true,
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 15, y: 15 },
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#ffffff',
      height: 30
    },
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  // 在窗口创建后立即最大化
  win.maximize()

  win.loadFile(path.join(__dirname, 'index.html'))

  // 安全路径处理
  ipcMain.handle('load-asset', (event, relativePath) => {
    const allowedDirs = ['sound', 'music', 'background']
    const targetDir = relativePath.split('/')[0]
    if (!allowedDirs.includes(targetDir)) {
      throw new Error('非法资源路径')
    }
    return path.join(__dirname, 'assets', relativePath)
  })

  // 开发工具
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(createWindow)

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})