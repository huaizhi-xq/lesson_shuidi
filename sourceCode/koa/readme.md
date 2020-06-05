## KOA 源码

1. Object.create   koa源码中

  ctx = req + res Object.assign
    koa源码中怎么去造ctx这个对象
    compose  (中间件)

1. 完成了架构的搭建
2. application App context.js 上下文对象 request.js 请求对象。。。

思路： createServer use fn
  use多个中间件函数



ctx设计地很美， req，res合并起来  直接交给上下文
  对象中 get  get语法将对象属性绑定到查询该属性时将被调用的函数
    __defineGetter__  代理  delegates库