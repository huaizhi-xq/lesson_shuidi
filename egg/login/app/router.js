'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 网站 多个模块 /register ? /login/register
  // 注册 req res 控制器
  router.post('/login/register',controller.login.register);
  // 登陆 post 请求login登陆
  router.post('/login',controller.login.loginIn);
};
