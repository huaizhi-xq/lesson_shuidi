const { User } = require('../../model/user');

module.exports = async (req, res) => {

  // 标识当前访问的是用户管理页面
  req.app.locals.currentLink = 'user';

  // 接受客户端传递过来的当前页参数
  let page = req.query.page || 1;
  // 每一页显示的数据条数
  let pageSize = 10;
  // 查询用户数据的总数
  let count = await User.countDocuments({});
  // 总页数   Math.ceil向上取整
  let total = Math.ceil(count / pageSize);
  // 页码对应的数据开始查询的位置
  let start = (page - 1) * pageSize;
  // 将用户信息从数据库中查询出来
  let users = await User.find({}).limit(pageSize).skip(start);
  // console.log(users)
  // res.send(users);
  // 渲染用户列表模板
  res.render('admin/user',{
    users: users,
    page: page,
    total: total,
    count: count
  })
}