const express = require('express')
const shop = express.Router()
const db = require('../db/db')
const Shop = require('../models/shop')




// 2d spare 是mongodb内建的  独有的功能
// 1. NOSQL  2. 移动时代 定位功能 

shop.get('/', async(req, res) => {
  Shop
    .find({
      location: {
        $near:  [115.950531, 28.549066],//$  在mongodb里 函数 $lt  $ 指令
        $maxDistance: 0.1  //10公里 = 1  index 距离排序 
      }  
    }).limit(10).exec((err, shops) => {//mongodb默认20
      if (err) console.log(err)
      res.json(shops)
    }) 
})

shop.post('/', async(req, res) => {
  console.log('+++')
  const njxc = new Shop({
    name: '农家小炒',
    location: [115.83593,28.723639]
  });
  njxc
  .save((err, saved) => {
    res.json({
      status: 1
    })
    // message: '添加成功'
  })
})

module.exports = (app) => {
  app.use('/shops',shop)
}