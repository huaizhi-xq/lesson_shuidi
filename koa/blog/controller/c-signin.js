exports.getSignIn = async (ctx) => {
  await ctx.render('signin', {  //渲染
    
  })  
}

exports.postSignIn = async (ctx) => {
  ctx.body = {
    mes: '登陆成功'
  }
}