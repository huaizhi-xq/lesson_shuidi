// blog 分类的Schema
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  title: {
    type: String
  }
})

const Category = mongoose.model('Category', categorySchema,'categories')

module.exports = {
  Category
}