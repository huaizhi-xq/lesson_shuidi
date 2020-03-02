const express = require('express')

const app = express();

app.use((req, res, next) => {
  // 1. 允许哪些客户端访问我
  //  *代表允许所有客户端
  // 注意：如果跨域请求涉及cookie信息传递  值不可以为*
  res.header('Access-Control-Allow-Origin','*');
  // 2. 允许客户端使用哪些请求方法访问我
  res.header('Access-Control-Allow-Methoods','get,post');
  // 允许客户端发送请求时携带cookie信息
  // res.header('Access-Control-Allow-Credentials', true);
  next();
})

// 路由的模块化
const router = require('./routes/index.js');
router(app);



app.listen("3000", () => {
  console.log("api 服务器上线了")
})