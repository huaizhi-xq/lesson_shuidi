- Express
  
  中间件
    中间件就是一堆方法，可以接受客户端发来的请求，可以对请求做出响应，也可以将请求继续交给下一个中间件
    next方法可以将请求交给下一个中间件
    app.use()
      第一个参数为空的话匹配所有的请求方式， 有则匹配有的
      第二个参数请求处理函数
    应用：
      路由保护
      网站维护公告
      自定义404页面
    错误处理中间件
      app.use((err,req,res,next), callback)
    捕获错误
      try catch 可以捕获异步函数以及同步函数的错误，但不能捕获其他类型的API发生的错误(callback,Promise...)
    
  构建模块化路由
    express.Router()  匹配路由路径 再在router文件夹中创建二级路由
  GET参数的获取
    req.query(对象格式)
  POST请求参数
    借助第三方包 body-parser
  路由参数
    req.params
  静态资源的处理
    express.static
  模板引擎
    art-template express-art-template
    app.locals


