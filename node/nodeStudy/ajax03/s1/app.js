const express = require('express')
const path = require('path')
// 向其他服务器端请求数据的模块
const request = require('request')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/server', (req, res) => {
  request('http://localhost:3001/cross', (err, response, body) => {
    // console.log(err);
    // console.log(response);
    // console.log(body);
    res.send(body)
  })
})

app.listen(3000);
console.log('启动成功');