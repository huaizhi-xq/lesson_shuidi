const express = require('express')
const router = express.Router(); //路由对象

const manufacturerController = require('../../controllers/manufacturer')

router.get('/manufacturers'
, manufacturerController.all) //控制器
router.post('/manufacturers',
manufacturerController.create)

module.exports = router