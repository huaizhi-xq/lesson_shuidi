const mongoose = require('mongoose')
// 创建集合规则
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10
  },
  age: {
    type: Number,
    min: 10,
    max: 25
  },
  sex: {
    type: String
  },
  email: String,
  hobbies: [String],
  collage: String,
  enterDate: {
    type: Date,
    default: Date.now
  }
})
// 创建集合
const Student = mongoose.model('Student', studentSchema)
// 导出信息
module.exports = Student;