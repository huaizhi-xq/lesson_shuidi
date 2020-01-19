
// 引入用户集合规则
const { User, validateUser } = require('../../model/user')
module.exports = async (req, res, next) => {
  try {
    await validateUser(req.body)
  } catch (e) {
    // 验证没有通过
    // e.message
    // 重定向回用户添加页面
    // return res.redirect(`/admin/user-edit?message=${e.message}`);
    // JSON.stringify() 将JSON对象数据类型转换为JSON字符串数据类型   toJSONString()  
    let url = JSON.stringify({path:'/admin/user-edit',message:e.message});
    // console.log(url);
    return next(url);
  }

  // 根据邮箱地址查询用户是否存在
  let user = await User.findOne({email: req.body.email});
// 如果用户已经存在 邮箱地址已经被别人占用
  if (user) {
    
    // 重定向回用户添加页面
    // return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`)
    return next(JSON.stringify({path:'/admin/user-edit',message:'邮箱地址已经被占用'}));
  }
  // 将用户信息添加到数据库当中
  await User.create(req.body);
  // 重定向到用户列表页面
  res.redirect('/admin/user')
}