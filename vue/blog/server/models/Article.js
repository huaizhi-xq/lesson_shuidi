// 建表 collection
const mongoose = require('mongoose')

const acticleSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String
  },
  isTop: {
    type: Boolean,
    default: false
  },
  summary: {  //列表里介绍
    type: String
  },
  body: {
    type: String
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }
  ]
})

const Article = mongoose.model('Article', acticleSchema)

Article.create({
  title: '学'
})

// 类 表 articles
module.exports = {
  Article
}