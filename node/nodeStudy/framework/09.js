const express = require('express');
const app = express();

app.get('/index', (req, res) => {
  // 获取请求参数
  res.send(req.query)
})

app.listen(3000);
console.log('启动成功')