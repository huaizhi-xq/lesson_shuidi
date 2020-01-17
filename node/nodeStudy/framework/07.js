const express = require('express');
const app = express();
// 创建路由对象
const home = express.Router();
// 为路由对象匹配请求路径
app.use('/home', home);
// 创建二级路由
home.get('/index', (req, res) => {
  //  /home/index
  res.send('欢迎')
})

app.listen(3000);
console.log('启动成功')