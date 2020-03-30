const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')  //中间件服务  函数

// 发送表单的处理  / req  middlewares
// session  数据库 。。。
const logger = async (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method}  ${ctx.request.url}`)
  await next()
  // next()
}
app.use(logger)
app.use(bodyParser())  //内部的代码  await    next

//加中间件  加上一个服务 
// logger  设计日志服务   req Date()  req.url  req console.log 

// 返回hello  向用户响应hello  web服务
// const sayHelloCN = (ctx) => {
//   ctx.body = "你好"
  
// }

// const sayHello = (ctx) => {
//   ctx.body = "hello"
// }
// app.use(sayHelloCN)
// app.use(sayHello)  //启用一个中间件服务

// req ctx.req  下面的中间件函数提供服务
app.use(async (ctx) => {
  // 得到表单传递过来的数据
  // res 向发出请求的用户返回他在请求时form里的数据
  // 没有拿到？    表单数据达到， 异步的  on('data') -> on('end')
  // bodyParser 加一个
  ctx.body = ctx.request.body
})

app.listen(3000)