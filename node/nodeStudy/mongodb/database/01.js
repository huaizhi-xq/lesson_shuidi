const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(() => console.log('成功'))
  .catch((err) => console.log(err,'失败'))