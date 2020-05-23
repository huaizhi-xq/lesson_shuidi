const { app, BrowserWindow, ipcMain } = require('electron');
// ipcMain主进程   ipcRenderer 渲染进程
const path = require('path')


let win


const createWindow = () => {
  win = new BrowserWindow({
    width: 960,
    height: 600,
    minWidth: 830,
    minHeight: 500,
    webPreferences: {  
      nodeIntegration: true  //node一体化
    }
  })
  // file://
  win.loadURL(`file://${__dirname}/index.html`)
}

ipcMain.on('greet', (event, args) => {
  console.log(args)
  event.sender.send('greet', {
    message: 'hi renderer'
  })
})


app.on('ready', createWindow)