const {User} = require('../../model/user')
module.exports = async (req, res) => {

    // 标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'user';

  // 获取地址栏中id参数
  const{ message, id } = req.query;
  // 如果传递了id
  if (id) {
    // 修改
  let user = await User.findOne({_id: id});
  //  console.log(user);
  // 渲染用户编辑页面(修改)
  res.render('admin/user-edit', {
    message: message,
    user: user,
    link: '/admin/user-modify?id=' + id,
    button: '修改'
  })
  } else {
    // 添加
    res.render('admin/user-edit', {
      message: message,
      link: '/admin/user-edit',
      button: '添加'
    })
  }

}