const express = require('express')
const path = require('path')
const formidable = require('formidable');
const session = require('express-session');
const app = express();

// 实现session功能
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  // 1. 允许哪些客户端访问我
  //  *代表允许所有客户端
  // 注意：如果跨域请求涉及cookie信息传递  值不可以为*
  res.header('Access-Control-Allow-Origin','http://localhost:3000');
  // 2. 允许客户端使用哪些请求方法访问我
  res.header('Access-Control-Allow-Methoods','get,post');
  // 允许客户端发送请求时携带cookie信息
  res.header('Access-Control-Allow-Credentials', true);
  next();
})

app.get('/test', (req, res) => {
  const result = 'fn({name: "张三"})'
  res.send(result);
})

app.get('/better', (req, res) => {
	// 接收客户端传递过来的函数的名称
	//const fnName = req.query.callback;
	// 将函数名称对应的函数调用代码返回给客户端
	//const data = JSON.stringify({name: "张三"});
	//const result = fnName + '('+ data +')';
	// setTimeout(() => {
	// 	res.send(result);
	// }, 1000)
	res.jsonp({name: 'lisi', age: 20});
});

app.get('/cross', (req, res) => {

	res.send('ok');
});

app.post('/login', (req, res) => {
	// 创建表单解析对象
	var form = formidable.IncomingForm();
	// 解析表单
	form.parse(req, (err, fields, file) => {
		// 接收客户端传递过来的用户名和密码
		const { username, password } = fields;
		// 用户名密码比对
		if (username == 'itxxx' && password == '123456') {
			// 设置session
			req.session.isLogin = true;
			res.send({message: '登录成功'});
		} else {
			res.send({message: '登录失败, 用户名或密码错误'});
		}
	})
})

app.get('/checkLogin', (req, res) => {
	// 判断用户是否处于登录状态
	if (req.session.isLogin) {
		res.send({message: '处于登录状态'})
	} else {
		res.send({message: '处于未登录状态'})
	}
});

app.listen(3001);
console.log('启动成功');