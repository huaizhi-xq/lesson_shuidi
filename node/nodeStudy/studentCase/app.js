const http = require('http')
const app = http.createServer();

// 引入模板引擎
const template = require('art-template');
const path = require('path');

// 引入静态资源访问模块
const serveStatic = require('serve-static');
// 引入处理日期的第三方模块库
const dateformat = require('dateformat');


// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname, 'public'));

// 配置模板的根目录
template.defaults.root = path.join(__dirname, 'views');
// 处理日期格式的方法  导入模板变量                                                                                                                                                                                                                                                                                                                   
template.defaults.imports.dateformat = dateformat;

require('./model/connect');
const router = require('./route')


app.on('request', (req, res) => {
  router(req, res, () => {});
  serve(req, res, () => {});
})

app.listen(80)
console.log('启动成功')