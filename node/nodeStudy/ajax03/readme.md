- ajax请求限制
  ajax只能向自己的网站发送请求
  什么是同源？
    相同的协议，域名和端口
  同源的目的
    为了保证用户信息的安全，防止恶意网站窃取数据

  - 非同源ajax请求(01)
    浏览器会拒绝接受

  - 使用JSONP解决同源限制问题(json with padding)(02)
    它不属于Ajax请求，但它可以模拟Ajax请求
    1. 将不同源的服务器端请求地址写在script标签的src属性中
    2. 服务器端响应的数据必须是一个函数的调用，真正要发送给客户端的数据需要作为函数调用的参数
    3. 在客户端全局作用域下定义函数fn
    4. 在fn函数内部对服务器端返回的数据进行处理

  - JSONP代码优化(03)

  - 天气案例(04)

  - CORS 跨域资源共享(05)
    克服了Ajax只能同源的限制
    在服务器端设置俩个响应头

  - 访问非同源数据 服务器端解决方案(06)
    request第三方模块  服务器端没有同源政策

  - cookie复习
    客户端第一次访问服务器端的时候 ，会服务器端会响应cookie给客户端
    第二次访问cookie会随着请求发送到服务器端

  - withCredentials属性(07)
    ajax跨域请求，默认不会携带cookie
    withCredentials: 默认值为false
    Access-Conrtol-Allow-Credentials: true 允许客户端发送请求时携带cookie

