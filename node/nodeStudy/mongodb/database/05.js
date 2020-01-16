const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground',  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('成功'))
  .catch((err) => console.log(err,'失败'))

//创建集合规则 
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  hobbies: [String]
});

// 使用规则创建集合
//  1 集合名称 2 集合规则
const User = mongoose.model('User', userSchema); 
// 查找到一条文档并且删除 返回删除的文档
// User.findOneAndDelete({_id: '5c09f294aeb04b22f8460969'}).then(result => console.log(result))
// 删除多条文档
User.deleteMany({}).then(result => console.log(result));