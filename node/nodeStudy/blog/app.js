const express = require('express');
// 处理路径
const path = require('path');
// 引入body-parser模块 用来处理post请求参数
const bodyParser = require('body-parser');
// 导入express-session模块
const session = require('express-session');
// 导入art-template
const template = require('art-template');
// 导入dateformat
const dateFormat = require('dateformat');
// 导入morgan 请求信息打印在控制台中
const morgan = require('morgan');
// 导入config模块
const config = require('config')
// 创建网站服务器
const app = express();
// 连接数据库
require('./model/connect');
// 处理post请求参数 默认用querysting 对http请求所带的数据进行解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
// 配置session
app.use(session({
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  },
  resave: false, //添加 resave 选项
  saveUninitialized: false, //添加 saveUninitialized 选项
  secret: 'secret key'
}))

// 告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'))
// 告诉express框架模板的默认后缀是什么
app.set('view engine', 'art')
// 当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine('art', require('express-art-template'))
// 向模板内部导入dateFormat变量
template.defaults.imports.dateFormat = dateFormat

// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));

console.log(config.get('title'))

// 获取系统环境变量 返回值对象
if (process.env.NODE_ENV == 'development') {
  // 开发环境
  // 在开发环境中 将客户端发送到服务器端的请求信息打印到控制台中
  console.log('当前是开发环境')
  app.use(morgan('dev'))
} else {
  // 生产环境
  console.log('当前是生产环境')

}

// 引入路由模块
const home = require('./router/home');
const admin = require('./router/admin');

// 拦截请求 判断用户登陆状态
app.use('/admin', require('./middleware/loginGuard'))

// 为路由匹配请求路径
app.use('/home', home);
app.use('/admin', admin);

// 错误 重定向中间件
app.use((err, req, res, next) => {
  // 将JSON字符串转换JSON对象类型
  // JOSN.parse()
  // console.log(err);
  const result = JSON.parse(err);
  // console.log(result);
  // const result = err;
  let params = [];
  for ( let attr in result) {
    if (attr != 'path') {
      params.push(attr + '=' + result[attr]);
    }
  }
  res.redirect(`${result.path}?${params.join('&')}`);
})

app.listen(80);
console.log('启动成功，请访问localhost')