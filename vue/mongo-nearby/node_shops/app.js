const express = require('express')

const app = express()

require('./routers/index')(app)


app.listen('3000', () => {
  console.log("sdsa")
})