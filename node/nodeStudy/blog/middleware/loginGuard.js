const guard = (req, res, next) => {
  // 判断用户访问的是否是登陆页面
  // 判断用户是否是登陆状态 是 则放行 否 则重定向到登陆页面
  if (req.url != '/login' && !req.session.username) {
    res.redirect('/admin/login');
  } else {
    // 用户是登陆状态 放行
    next();
  }
}

module.exports = guard;