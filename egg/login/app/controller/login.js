const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    // 异步的 存一条数据
    const { ctx } = this;
    const { password, username, email } = ctx.request.body;
    // service  数据存储业务
    // ctx.body = 'hello word!';
    // 分层 
    await ctx.service.user.register({ password, username, email });
  }
  async loginIn() {
    const { ctx } = this;
    
    // 用户名和密码 ctx req res 
    // console.log(ctx.request.body);
    const{ email, password } = ctx.request.body;  //es6解构
    // console.log(email, password);

    ctx.body = '登陆成功';
  }
}

module.exports = LoginController;