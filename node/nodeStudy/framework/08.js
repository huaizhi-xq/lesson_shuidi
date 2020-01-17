const express = require('express');
const app = express();

const admin = require('./router/admin')
const home = require('./router/home')

app.use('/home',home)
app.use('/admin', admin)

app.listen(3000);
console.log('启动成功')