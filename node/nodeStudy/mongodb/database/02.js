const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('成功'))
  .catch((err) => console.log(err,'失败'))

//创建集合规则 
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
});

// 使用规则创建集合
//  1 集合名称 2 集合规则
const Course = mongoose.model('Course', courseSchema); //courses  返回一个构造函数
//创建集合实例
const course = new Course({
  name: 'node.js',
  author: 'xxx',
  isPublished: true
}) 
// 保存到数据库中
course.save();