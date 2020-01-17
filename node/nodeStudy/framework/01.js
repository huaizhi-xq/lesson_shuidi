// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express();

app.get('/', (req, res) => {
  //send() 
  // 1. 内部会检测响应内容的类型
  // 2. 会自动设置http状态码
  // 3. 帮我们自动设置响应的内容类型以及编码
  res.send('hello express')
});
app.get('/list', (req, res) => {
  res.send({name: '张三', age: 18})
})

app.listen(3000);
console.log('启动成功')