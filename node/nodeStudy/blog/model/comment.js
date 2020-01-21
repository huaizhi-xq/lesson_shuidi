const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  //文章id
  aid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  },
  // 评论人用户id
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  time: {
    type: Date
  },
  content: {
    type: String
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
  Comment
}