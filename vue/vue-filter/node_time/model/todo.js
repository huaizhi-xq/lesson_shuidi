const mongoose = require('mongoose')

// 数据存储(物理需求)是目的  但不猴急  数据的模型设计 
const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  content: String,
  // 开始日期  结束日期
  start: { type: Date, default: Date.now() },
  end: { type: Date, default: Date.now() },
  created_at: {
    type: Date, default: Date.now()
  },
  update_at: {
    type: Date, default: Date.now()
  },

})



const Todo = mongoose.model('Todo', todoSchema)

// Todo.create({
//   title: "da"
// })

module.exports = Todo