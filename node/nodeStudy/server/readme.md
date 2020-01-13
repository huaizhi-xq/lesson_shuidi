- 创建web服务器
  const http  = require('http');
  const app = http.createServer();
  app.listen(3000);
- http协议
  超文本传输协议
  报文：传递过程中的数据包
    1. 请求方式
      GET 请求数据
      POST 发送数据
    2. 请求地址
       req.method
       console.log(req.method);
       获取请求地址
       console.log(req.url);
       请求报文信息
       console.log(req.headers);
  响应报文
    1. 状态码
      200 请求成功
      404 请求的资源没有找到
      500 服务器端错误
      400 客户端请求由语法错误
    2. 内容类型
      content-type
  请求参数
    GET请求参数
      localhost:3000/?name=zhangsan&age=20
      url模块将参数转换为对象格式
    POST请求参数
      data事件end事件
      quertstring模块将参数转换为对象格式
  路由
    请求什么响应什么
  动态资源
    相同的请求地址 不同参数 得到不同的响应资源
  静态资源
    服务器不需要处理 直接返回
