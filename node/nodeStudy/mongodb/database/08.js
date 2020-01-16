const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground',  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('成功'))
  .catch((err) => console.log(err,'失败'))

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})
const postSchema = new mongoose.Schema({
  title: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// 创建用户
// User.create({name: 'it'}).then(result => console.log(result));
// 创建一篇文章
// Post.create({title: '123', author: '5e1fcb7192f7749b2cb1cdf8'}).then(result => console.log(result));
Post.find().populate('author').then(result => console.log(result));