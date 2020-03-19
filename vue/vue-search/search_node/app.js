const express = require('express')
const app = express()
const db = require('./db/db.js')
const router = require('./routes/index.js')
router(app)


app.listen('3000', () => {
  console.log('ok')
})