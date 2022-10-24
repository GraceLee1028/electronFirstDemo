//app:控制应用的事件生命周期；BrowserWindow负责创建和管理应用的窗口
const {app,BrowserWindow} = require('electron')

const createWindow = ()=>{
  //创建窗口
  const win = new BrowserWindow({
    width:800,
    height:600
  })
  //将页面加载到窗口中
  win.loadFile('http://192.168.100.176:8081/#/pcormobile?no=A298596559912968192&isEdit=false&isMobile=true&formType=4')
}
//在应用准备就绪时，调用函数createWindow()
app.whenReady().then(()=>{
  createWindow();
})
