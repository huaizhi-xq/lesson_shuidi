// 引入express框架
const express = require('express')
const fs = require('fs');
//将readFile变为异步函数
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
// 创建网站服务器
const app = express();

app.get('/index', async (req, res, next) => {
  try {
    await readFile('01.js','utf8');
    res.send('ok')
  } catch(ex) {
    next(ex);
  }
})

// 错误处理中间件
app.use((err,req,res,next) => {
  res.status(500).send(err.message);
})

app.listen(3000);
console.log('启动成功')