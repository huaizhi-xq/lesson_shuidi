const { Article } = require('../../model/article');
// 返回一个方法
const pagination = require('mongoose-sex-page');
module.exports = async (req, res) => {  
  // 接受客户端传递过来的页面
  const page = req.query.page;
  // 标识当前访问的是文章管理页面
  req.app.locals.currentLink = 'article';
  // page 当前页
  // size 每页显示的数据条数
  // display 客户端要显示的页码数量
  // exec 向数据库发送查询请求
  // 查询所有文章数据
  let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();



  //  res.send(articles);

  res.render('admin/article', {
    articles: articles
  })
}