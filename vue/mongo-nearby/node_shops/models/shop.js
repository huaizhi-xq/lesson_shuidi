const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true //必填
  },
  location: {
    type: [Number],  //[120.000,23.44]
    index: "2d", //2d索引
    sparse: true
  }
})

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop