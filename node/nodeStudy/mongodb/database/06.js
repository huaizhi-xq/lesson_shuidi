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
const User = mongoose.model('User', userSchema); 
// 更新集合中的文档(一个)
// User.updateOne({name: '李四'}, {name: '李狗蛋'}).then(result => console.log(result))
// 更新集合中的文档(多个)
User.updateMany({}, {age: 17}).then(result => console.log(result));