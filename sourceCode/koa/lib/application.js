// koa类的提供  简约
const http = require('http')
const EventEmitter = require('events')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class Koa extends EventEmitter {
  constructor() {
    super()
    this.fn = undefined  //数组 callback
    this.context = context
    this.request = request
    this.response = response
  }
  use(fn) {  //先支持一个函数的callback
    // 异步
    this.fn = fn
  }
  createContext(req, res) {   //创建ctx
    // es6 context  ctx  context.js 模块  fn ctx.body
    const ctx = Object.create(this.context)  //继承原对象 ctx在增加属性时不影响原对象
    // ctx.body = `dfsfsf`
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    ctx.req = request.req = response.req = req //引用式赋值
    ctx.res = request.res = response.res = res //引用式赋值
    request.response = response
    response.request = request
    return ctx
  }
  handleRequest(req, res) {
    // 加工 ctx
    let ctx = this.createContext(req, res)  //创建ctx
    this.fn(ctx) //调用用户给的回调，把ctx给用户使用
    res.end(ctx.body) //ctx.body = 'hello' 返回给用户
  } 
  listen(...args) {//args port callback
    // this.fn接受的是req，res 怎么实现？
    // 交给中间处理函数， req  res加工成ctx对象  ctx他的内部调用this.fn
    let server = http.createServer(this.handleRequest.bind(this))  //callback
    server.listen(...args)
  }
}

module.exports = Koa