中间件 洋葱模型

node  POST /posts {title, body:}  文章 
RESTFUL 新增文章

登录
未登录   直接访问  /posts  -> /login

前端  路由守卫 vue-router  beforeEach 
      axios 请求拦截  
后端  koa  express  http请求头 POST /posts
      html/json  后端跳转  http 304 ? /login
      ctx.redirect('/login')

- node的框架 以中间件(函数) 来构成web服务  为用户访问提供服务
  是node 开发的核心

- 多个 访问顺序
  洋葱一样 一层一层   提前退出
  每个用户访问 req  http://localhost:3000/
  很多层  去提供中间的状态服务
  用中间件去服务 res

- 中间件的洋葱模型
  一层一层已经理解 (ctx.body  res.json)
  没有结束  出来了  栈数据结构  简单的数组 

- 中间件你是怎么用的  觉得对它深入理解了
  比如发文章前， check登录 ，不用写到posts/ 中间件中
  而独立的放到auth鉴权中间件函数中， 单独编写，分离到middlewares目录
  node架构中多了个middlewares
