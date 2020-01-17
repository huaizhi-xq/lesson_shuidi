// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express();

app.get('/request', (req, res, next) => {
  req.name = "张三";
  next();
})
app.get('/request', (req, res) => {
  res.send(req.name);
})
app.listen(3000);
console.log('启动成功')