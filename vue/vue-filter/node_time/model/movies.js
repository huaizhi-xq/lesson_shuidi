const mongoose = require('mongoose')
// 硬盘 物理 《- 逻辑模型

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  poster: String,  /**封面 url 比较大 jpg png */
  rating: String,
  introduction: String,
  // 大多数集合(表)时间类型的声明
  created_at: {
    type: Date,
    default: Date.now
  },
  update_at: {
    type: Date,
    default: Date.now
  }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie