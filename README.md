# electronFirstDemo
electron的初次研究
## 1.开始electron的开发环境
### 1.1 新建项目，安装electron依赖
```
# 生成package.json文件
pnpm init
// or
npm init

# 安装electron依赖
pnpm add electron -D

```
### 1.2 根目录新建文件[main.js], 在package.json添加命令
```
# main.js
console.log('hello electron')

# package.json文件
{
  "name": "electronFirstDemo",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"electron ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^21.1.1"
  }
}
```
### 1.3 运行electron 应用
```
npm run start
```
## 2. 把网页装载到BrowserWindow
### 2.1 装载本地HTML
```
```
### 2.2 装载远程的html
