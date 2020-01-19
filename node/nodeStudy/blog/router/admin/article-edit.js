const { Article } = require('../../model/article');
module.exports = async (req, res) => {

    // 标识当前访问的是文章管理页面
    req.app.locals.currentLink = 'article';

    // 获取页面id
    const id = req.query.id;

    let article = await Article.findOne({_id: id});

    // console.log(article.cover);

    if (id) {
      // 文章修改页面
      res.render('admin/article-edit',{
        link: '/admin/article-modify?id=' + id,
        button: '修改',
        article: article
      })

    } else {
      // 文章添加页面
      res.render('admin/article-edit', {
        link: '/admin/article-add',
        button: '添加'
      })
    }

  
}