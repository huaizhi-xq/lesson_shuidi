const { Article } = require('../../model/article')
module.exports = async (req, res) => {
  // res.send('ok')
  // console.log(req.query.id);
  const id = req.query.id;
  // res.send(id)
  // console.log(id)
  await Article.findOneAndDelete({_id: id});
  res.redirect('/admin/article');
}