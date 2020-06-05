const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { QRCodeModel, UserModel } = require('./models');
const QRCodeNode = require('qrcode');
const moment = require('moment');
const app = express();
const cors = require('cors')
const port = 8888;
const jwt = require('jsonwebtoken')
// cookie uid http头部带上,不能太长
// 服务器端 uid 你是谁  decode

// jwt生成token
function generateToken(data, secret) {  //有效性
  let lat = Math.floor(Date.now()/1000)  //生成时间
  let exp = Math.floor(Date.now()/1000) + 60*60*24*15  //有效期15天
  // jwt 将一个json对象  ->  web token
  let token = jwt.sign({ //给客户端
    data,
    lat,
    exp
  }, secret)
  return token
}

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

// 登陆验证中间件
const auth = async (req, res, next) => {
  console.log('登陆了么？')
  const authorationToken = req.headers['authorization']
  // console.log(authorationToken, '+++')
  // console.log(jwt.verify(authorationToken.slice(7), '123456'))
  try {
    data = jwt.verify(authorationToken.slice(7), '123456')
    if (!data) {
      res.send({
        code: 401,
        message: '请先登录'
      })
      return
    }
  } catch (error) {
    return
  }
  // 给请求对象加点料  鉴权
  req.logged = true
  req.user = {
    userId: data.data.userId,
    username: data.data.username,
    avatar: data.data.avatar,
    token: authorationToken
  }
  await next()
}
// 用postman 模拟app 扫这个码?扫码后跳转的url
app.post('/qrcode/scanned', auth, async (req, res) => {
  console.log('扫码后改做的')
  let { qrcodeId } = req.body
  // console.log(qrcodeId, '--')
  const qrcode = await QRCodeModel.findOne({_id: qrcodeId})
  // console.log(qrcode)
  if (!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在?',
      data: null,
    })
    return 
  }
  await QRCodeModel.findOneAndUpdate({_id: qrcodeId}, {
    scanned: true,
    userInfo: {
      username: req.username,
      avatar: req.user.avatar,
    }
  })
  res.send({
    code: 200,
    message: '扫描成功'
  })
})

// 手机端点了 确定按钮后
app.post('/qrcode/confirm', auth, async (req,res) => {
  // status 1 
  // token
  // token, qrcodeId
  const { qrcodeId } = req.body
  const qrcode = await QRCodeModel.findOne({_id: qrcodeId})
  if (!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    })
  }
  await QRCodeModel.findOneAndUpdate({_id: qrcodeId}, {
    status: 1,
    userInfo: req.user
  })
  res.send({
    code: 200,
    message: '登陆成功!!!'
  })
})
// 手机点了取消
// app.post('/qrcode/cancel', )

app.get('/qrcode/check', async(req, res) => {
  const { qrcodeId } = req.query
  const qrcode = await QRCodeModel.findOne({_id: qrcodeId})

  if (!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    })
    return 
  }

  res.send({
    code: 200,
    message: '查询二维码状态成功',
    data: {
      qrcodeId,
      scanned: qrcode.scanned,
      expired: moment() > moment(qrcode.expireAt), 
      success: qrcode.status === 1,
      canceled: qrcode.status === -1,
      status: qrcode.status,
      userInfo: qrcode.userInfo
    }
  })

})

app.post('/register', async(req, res) => {
  const { username, password } = req.body
  // console.log(username, password)
  if (await UserModel.findOne({username, password})) {
    res.send({
      code: 500,
      message: '用户名已被注册'
    })
    return
  }
  const user = new UserModel({
    username,
    password,
    avatar: '￼https://usercontents.authing.cn/authing-avatar.png'
  })
  await user.save()
  res.send({
    code: 200,
    message: '注册成功'
  })
})

// cookie有缺点,特别是多端时代
app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await UserModel.findOne({
    username,
    password
  })
  if (!user) {
    res.send({
      code: 403,
      message: "服务器端拒绝"
    })
    return
  }
  // 分配token  localstroge
  const token = generateToken({userId: user._id, username, avatar: user.avatar}, "123456")
  res.send({
    code: 200,
    message: 'success',
    data: {
      _id: user._id,
      username,
      token
    }
  })
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