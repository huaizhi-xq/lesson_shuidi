const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Todo = require('../model/todo')
const moment = require('moment')
// restful
router.post('/', (req, res) => {
  // 存时间  给日期的字符串  html表单的提交  
  // console.log(req.body) //请求体的内容
  Todo.create(req.body, (err, todo) => {
    if (err) {
      res.json(err)
    } else {
      res.json(todo)
    }
  })   //BSON doc
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  // console.log(id)

  Todo.findOne({
    "_id":  mongoose.Types.ObjectId(id)
  }, (err, todo) => {
    if (err) console.log(err)
    console.log(moment(todo.start).format('MMMM Do YYYY, h:mm:ss a'))
    res.json({
      todo
    })
  })
  
})

module.exports  = router