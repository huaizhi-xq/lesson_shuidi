const{ Article } = require('../../model/article')
const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {
  const id = req.query.id;
  // 根据id查询文章详细信息
  let article = await  Article.findOne({_id: id}).populate('author');
  // 查询文章对应的文章评论信息
  let comments = await Comment.find({aid: id}).populate('uid')

  // res.send(article)
  // res.send('欢迎来到博客文章');
  res.render('home/article', { article,comments })
}