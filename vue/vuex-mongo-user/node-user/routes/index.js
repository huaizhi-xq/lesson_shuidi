const express = require('express')
const user = express.Router()
const db = require('../db/db')
const User = require('../models/user')

user.get('/', async(req, res) => {

  // console.log('+++')
  User.find({})
    .exec((err, concats) => {
      res.json(concats)
    })
})

user.get('/tag/:tag', async(req, res) => {
  const tag = req.params.tag
  // console.log(tag)
  User.find({tags: tag}).exec((err, concats) => {
    res.json(concats)
    // console.log(concats)
  })
})

module.exports = app => {
  app.use('/users', user)
}