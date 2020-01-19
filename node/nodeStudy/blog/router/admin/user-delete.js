const { User } = require('../../model/user');
module.exports = async (req, res) => {
  // res.send('ok');
  // 获取要删除的用户id
  const id = req.query.id;
  // 根据id删除用户
  await User.findOneAndDelete({_id: id});
  // 将用户重定向的列表页面
  res.redirect('/admin/user');
}