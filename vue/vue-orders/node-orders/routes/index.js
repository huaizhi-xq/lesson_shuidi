const express = require('express')
const orders = express.Router()
const db = require('../db/db')
const Order = require('../models/order')

// http://localhost:3000/orders?page=1&limit=20
// 10w  120M  取第几页page limit 
// 0 offset  skip 9 8*limit limit 20

orders.get('/', (req, res) => {
  // res.json({
  //   mes: "ok"
  // })
  // 总数， 分页 total  10
  // page limit 
  // 提供初值
  let {page = 1, limit = 20 } = req.query //业务经验
  page = parseInt(page)
  limit = parseInt(limit)
  // res.json({
  //   page,
  //   limit
  // })
  Order.countDocuments({}, (err, count) => {
    if (err) {
      res.json({
        status: 400,
        msg: JSON.stringify(err)
      })
    } else {
      Order
        .find({})
        .skip((page-1)*limit)  //游标
        .limit(limit)  //取多少条
        .sort({
          'orderDate': -1
        })
        .exec((err, docs) => {
          if (err) {
            res.json({
              status: 400,
              msg: JSON.stringify(err)
            })
          } else {
            res.json({
              status: 200,
              result: docs,
              total: count,
              msg: 'ok'
            })
          }
        })
    }
    
  })  //count 查询 查总数  独立于列表查询
})


module.exports = app => {
  app.use('/orders', orders)
}