const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { QRCodeModel, UserModel } = require('./models');
const QRCodeNode = require('qrcode');
const moment = require('moment');
const app = express();
const cors = require('cors')
const port = 8888;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
// 二维码生成接口
app.get('/qrcode/gene', async (req, res) => {
  // qrcode_id
  const qrcode = new QRCodeModel({
    createdAt: Date.now(),
    expireAt: moment(Date.now()).add(120, 's').toDate()
  })
  console.log(qrcode);
  await qrcode.save();

  let qrcodeData = {
    qrcodeId: qrcode._id,
    createdAt: qrcode.createdAt,
    expireAt: qrcode.expireAt
  }
  // base64
  const qrcodeUrl = await QRCodeNode.toDataURL(JSON.stringify(qrcodeData))
  res.send({
    code: 200,
    message: '生成二维码成功',
    data: {
      qrcodeUrl, 
      qrcodeId: qrcode._id
    }
  })

})

const auth = async (req, res, next) => {
  console.log('登陆了么？')
  await next()
}

app.post('/qrcode/scanned', auth, async (req, res) => {
  console.log('扫码后改做的')
})

connect();
function listen() {
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen)
  return mongoose.connect('mongodb://localhost:27017/scan-qrcode', {
    keepAlive: 1, 
    useNewUrlParser: true
  })
}