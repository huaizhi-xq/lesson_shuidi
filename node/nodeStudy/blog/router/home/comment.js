const { Comment } = require('../../model/comment')
module.exports = async (req,  res) => {
  // res.send(req.body)
  const {content, uid, aid} = req.body;
  await Comment.create({
    aid: aid,
    uid: uid,
    content: content,
    time: new Date()
  })

  // 将页面重定向文章详情页面
  res.redirect('/home/article?id=' + aid);
}