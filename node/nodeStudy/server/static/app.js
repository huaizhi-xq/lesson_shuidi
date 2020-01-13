
const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const mime = require('mime')

const app = http.createServer();
  
app.on('request', (req, res) => {
  // 请求路径
  let pathname = url.parse(req.url).pathname;

  pathname = pathname == '/' ? '/default.html' : pathname;

  // 转换为实际硬盘路径
  let realPath = path.join(__dirname, 'public' + pathname);
  // 返回资源类型
  let type = mime.getType(realPath);
  // 读取文件
  fs.readFile(realPath, (error, result) => {
    if (error) {
      res.writeHead(404, {
        'content-type': 'text/html;charset=utf8'
      })
      res.end('文件读取失败');
      return
    }
    res.writeHead(200, {
      'content-type': type
    })

    res.end(result);
  })
});
  
app.listen(3000);
console.log('启动成功')