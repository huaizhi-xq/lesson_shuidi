const express = require('express')


const app = express()
require('./db/db')(app)  //数据库的连接

// 静态服务
app.use('/', express.static(__dirname + '/dist'))

app.listen('5555',  () => {
  console.log('+++')
})
