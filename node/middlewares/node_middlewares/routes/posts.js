const Router = require('koa-router')
const router = new Router({
  prefix: '/posts'
})

const auth = require('../middlewares/auth')

router.get('/', async (ctx) => {
  ctx.body = '文章列表!'
})

// check 登陆了吗 
// post 中间件 鉴权 可以单独交给一个中间件去做 
router.post('/', auth,  async (ctx) => {
  // ctx.redirect('/login')
  ctx.body = '保存成功！'
})

module.exports = router