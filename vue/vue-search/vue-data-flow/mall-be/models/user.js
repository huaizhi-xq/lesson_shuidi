const mongoose = require('mongoose')

// login register  中小mall
// docs  包容前期的设计冗余  移动时代  5G物联网时代  数据不规整  动态调整
const userSchema = new mongoose.Schema({
  "userId": String,   //生成唯一的用户ID
  "name": String,
  "avator": String,
  "userName": String,
  "userPwd": String,
  // 杂糅 
  "cartList": [
    {
      productId: String,
      productImg: String,
      productName: String,
      checked: String,
      productNum: Number,
      productPrice: Number
    }
  ],
  "addressList": [
    {
      "addressId": Number,
      "userName": String,
      "streetName": String,
      "tel": Number,
      "isDefault": Boolean
    }
  ]
})

module.exports = mongoose.model('User', userSchema)