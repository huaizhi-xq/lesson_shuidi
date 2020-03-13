const express = require('express')
const db = require('./db/db')
const router = require('./routes/index')
const app = express()
router(app)

app.listen('3000', () => {
  console.log("启动了")
})