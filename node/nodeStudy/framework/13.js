const express = require('express');
const path = require('path');
const app = express();

// 实现静态资源访问
app.use(express.static(path.join(__dirname,'public')))

app.listen(3000);
console.log('启动成功')