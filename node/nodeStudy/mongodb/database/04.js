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
 
// 查询用户集合中的所有文档 数组
// User.find().then(result => console.log(result))
// 同过_id查找字段 数组
// User.find({_id: '5c09f1e5aeb04b22f8460965'}).then(result => console.log(result));
// findOne返回一条文档 默认返回当前集合中的第一条文档
// User.findOne({name: '李四'}).then(result => console.log(result));
// 查询年龄字段大于20小于50
// User.find({age: {$gt: 20, $lt: 50}}).then(result => console.log(result));
// 包含
// User.find({hobbies: {$in: ['足球']}}).then(result => console.log(result));
// 选择要查询的字段
// User.find().select('name email -_id').then(result => console.log(result));
// 将数据按年龄排序
// User.find().sort('age').then(result => console.log(result));
// User.find().sort('-age').then(result => console.log(result));
// skip 跳过 limit 限制
// User.find().skip(2).limit(3).then(result => console.log(result));