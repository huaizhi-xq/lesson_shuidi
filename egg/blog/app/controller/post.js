'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async new() {
    // const { ctx } = this;
    // ctx.body = 'hi, post';
    await this.ctx.render('new.tpl'); //渲染
  }
  async create() {
    // this.ctx.body = '在这里处理表单提交';
    const { ctx } = this;
    let { title, body } = ctx.request.body; //请求体
    // console.log(title, body);
    await ctx.service.post.newPost(title, body);
    ctx.redirect('/posts'); //跳转
  }
  async index() {
    await this.ctx.render('index.tpl');
  }
}

module.exports = PostController;
