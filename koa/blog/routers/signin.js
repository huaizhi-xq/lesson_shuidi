const router = require('koa-router')();
const controller = require('../controller/c-signin')

// 显示登录页
router.get('/signin', controller.getSignIn);
router.post('/signin', controller.postSignIn)
module.exports = router;