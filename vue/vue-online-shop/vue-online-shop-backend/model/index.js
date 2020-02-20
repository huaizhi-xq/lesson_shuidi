const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// 模型层   mongoose
// products 商品 collection
// 小米 商家 collection 

// Schema 规则  数据
// new Schema save 存好数据
const productSchema = Schema({
  // id: ObjectId, // 唯一mongodb id ObjectId hash
  // mysql 自增
  name: String,
  image: String,
  price: Number,
  descripion: String,
  manufacturer: { //非关系型
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacturer'
  }
})
// 关系型数据库  一对多
const manufacturerSchema = Schema({
  // id: ObjectId,
  name: String,
})

// 生成模型类映射数据库表
const Product = mongoose.model('Product',productSchema)
const Manufacturer = mongoose.model('Manufacturer',manufacturerSchema)

// Manufacturer.create({
//   name: '小米'
// }).then(() => console.log('创建成功'))
//   .catch(() => console.log('创建失败'))

module.exports = {
  Product,
  Manufacturer
}