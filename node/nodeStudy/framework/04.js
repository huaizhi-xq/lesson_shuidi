// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express();

// 网站公告
// app.use((req, res, next) => {
//   res.send('网站正在维护。。。')
// })

app.use('/admin', (req, res, next) => {
  let isLogin = true;
  if (isLogin) {
    next()
  } else {
    res.send('你还没有登陆')
  }
})

app.get('/admin', (req, res) => {
  res.send('访问成功');
})

app.use((req, res, next) => {
  // 定义404状态码
  res.status(404).send('当前访问页面不存在')
})

app.listen(3000);
console.log('启动成功')