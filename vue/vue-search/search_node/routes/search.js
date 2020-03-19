const express = require('express')
const search = express.Router()
const Post = require('../models/post')

search.get("/:keyword", (req, res) => {
  const keyword = req.params.keyword
  // console.log(keyword)
  // mongoose mongodb 复杂的查询
  // 执行复杂数据查询  migration 
  Post
    .find({
      $text: {
        $search: keyword
      }
    })
    .exec((err, posts) => {
      res.json(posts)
    })
})

module.exports = search