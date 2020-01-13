// 用于创建web服务器
const http  = require('http');
// 解析url
const url = require('url');
// app对象就是网站服务器对象
const app = http.createServer();
// 当客户端由请求来的时候
app.on('request', (req, res) => {
  // req.method
  // console.log(req.method);
  // 获取请求地址
  // console.log(req.url);
  // 请求报文信息
  // console.log(req.headers);

  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8'
  });

  // 第一个参数url地址 第二个参数将解析成对象形式
  let { query, pathname } = url.parse(req.url, true)
  console.log(query.name);
  console.log(pathname);

  if (req.method == 'POST') {
    res.end('post')
  } else if (req.method == 'GET') {
    res.end('<h2>get</h2>')
  }
  res.end('<h2>hello</h2>')
});
app.listen(3000);
console.log('启动成功')