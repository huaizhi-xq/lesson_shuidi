const guard = (req, res, next) => {
  // 判断用户访问的是否是登陆页面
  // 判断用户是否是登陆状态 是 则放行 否 则重定向到登陆页面
  if (req.url != '/login' && !req.session.username) {
    res.redirect('/admin/login');
  } else {
    // 如果用户是登陆状态 并且是一个普通用户
    if(req.session.role == 'normal') {
      // 阻止程序往下运行 返回博客首页
      return res.redirect('/home/')
    }
    // 用户是登陆状态 放行
    next();
  }
}

module.exports = guard;