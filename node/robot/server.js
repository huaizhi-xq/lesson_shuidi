const Koa = require('koa'), //node mvc框架
      route = require('koa-route'), //路由 提供url定义
      http = require('http'), //node 内置的http模块 短链接
      websockify = require('koa-websocket'), //长链接
      app = websockify(new Koa());
      //接收到客户端发送的请求
      app.ws.use(route.all('/',ctx => {
        ctx.websocket.on('message',message => {
            startRequest(message,ctx);
        })
      }))
    function startRequest (message,ctx) {
        http.get('http://api.qingyunke.com/api.php?key=free&appid=0&msg=${encodeURIComponet(message)}',res =>{
            res.setEncoding('utf-8');
            res.on('data',chunk => {
                ctx.websocket.send(JSON.parse(chunk).content);
            });
        });
    }
    app.listen(3000,err => {
        console.log('websocket 服务器启动在3000端口');
    })

