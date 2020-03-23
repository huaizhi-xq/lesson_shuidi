const express = require('express')
const db = require('./db/db')
const app = express()

require('./routes/index')(app)


app.listen('3000', () => {
  console.log("启动了")
})