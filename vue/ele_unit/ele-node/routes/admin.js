const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
  // 登陆业务忽略
  res.send({
    status: 1,
    message: '登陆成功'
  })
})

module.exports = router
