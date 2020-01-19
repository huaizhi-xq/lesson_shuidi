const { User } = require('../../model/user')
module.exports = async (req, res, next) => {
  // res.send(req.body)
  // 接受客户端请求的参数
  const {username, email, role, state, password} = req.body;
  // 即将修改的用户id
  const id = req.query.id;
  
  let user = await User.findOne({_id: id});
  
  if (password == user.password) {
    // 将用户信息更新到数据中
    await User.updateOne({_id: id}, {
      username: username,
      email: email,
      role: role,
      state: state
    });
    // 重定向到用户列表页面
    res.redirect('/admin/user');
  } else {
    // 密码比对失败
    let obj = {path: '/admin/user-edit', message: '密码比对失败，不能进行用户信息更改', id: id}
    return next(JSON.stringify(obj));
  }

}