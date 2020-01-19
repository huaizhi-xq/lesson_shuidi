// 创建博客展示页面路由
const { User } = require('../../model/user')
module.exports = async (req, res) => {
  //接受请求参数
  const {email, password} = req.body;
  // 如果用户没有输入邮件地址或者密码
  if (email.trim().length == 0 || password.trim().length == 0) {
    // res.status(400).send('<h4>邮件地址或者密码错误<h4>');
    res.status(400).render('admin/error', {
      msg: '邮件地址或者密码错误'
    });
  }
  //根据邮箱地址查询查询用户信息
  // 如果查询到了用户 user值是对象类型(对象中存储的是用户信息)   没有则为空
  let user = await User.findOne({email});
  // console.log(user);
  if (user) {
    // 将客户端传递过来的密码和用户信息密码进行对比
    if (password == user.password) {
      // 登陆成功
      req.session.username = user.username;
      // console.log(req.session.username )
      // req.session.id = user._id;
      // console.log(user._id)
      // console.log(req.session.id)
      // res.send('登陆成功');
      req.app.locals.userInfo = user;
      // 重定向到用户列表页面
      res.redirect('/admin/user');
    } else {
    // 没有查询到
    res.status(400).render('admin/error', {msg: '邮箱地址或密码错误'})
    }
  } else {
    // 没有查询到
    res.status(400).render('admin/error', {msg: '邮箱地址或密码错误'})
  }
}
