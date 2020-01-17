// 引入路由模块
const getRouter = require('router');
// 获取路由对象
const router = getRouter();
const Student = require('../model/user');
// 引入querystring模块  将字符串转变为对象形式
const querystring = require('querystring')
// 引入模板引擎
const template = require('art-template');

// 学生档案信息页面
router.get('/add', (req, res) => {
  let html = template('index.art', {})
  res.end(html);
})
// 学生列表页面
router.get('/list', async (req, res) => {
  // 查询学生信息
  let students = await Student.find();
  console.log(students);
  let html = template('list.art',{
    students: students
  })
  res.end(html);
})
// 实现学生信息添加功能路由
router.post('/add', (req, res) => {
  // 接受post参数
  let formData = '';
  req.on('data', param => {
    formData += param;
  })
  req.on('end', async () => {
    // console.log(querystring.parse(formData));
    await Student.create(querystring.parse(formData));
    res.writeHead(301, {
      Location: '/list'
    });
    res.end()
  })
})

module.exports  = router