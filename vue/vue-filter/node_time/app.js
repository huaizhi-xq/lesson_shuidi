const express = require('express')

const app = express()
const config = require('./config')
const mongoose = require('mongoose')
mongoose.connect(config.mongodb,{ useNewUrlParser: true , useUnifiedTopology: true });

const todo = require('./router/index')

const bodyParser = require('body-parser')

// 中间件， 比路由更早去处理http请求头数据的收集
// 字节流  on('data')... on('end')
// 第一次发送的是请求头  url length
// 每次到达后， 比较
app.use(bodyParser.json()) //post
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/todo', todo)
// 1. port 端口
// 2. 数据库连接


app.listen(config.port, () => {
  console.log(`listening ${config.port}`)
})