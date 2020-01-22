const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express();

app.use(bodyParser.json())

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

app.get('/first', (req, res) => {
  res.send('hello ajax')
})

app.get('/responseData', (req, res) => {
  res.send({"name": "zhangsan"})
})

app.get('/get', (req, res) => {
  res.send(req.query);
})

app.post('/post', (req, res) => {
  res.send(req.body);
})

app.post('/json', (req, res) => {
  res.send(req.body);
})

app.get('/readystate', (req, res) => {
  res.send('hello');
})

app.get('/error', (req, res) => {
  // console.log(aa)
  res.status(400).send('not ok')
})

app.get('/cache', (req, res) => {
  fs.readFile('./test.txt', (err, result) => {
    res.send(result);
  })
})

app.listen(3000);
console.log('启动成功')