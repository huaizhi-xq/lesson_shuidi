const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)  //使用创建索引功能
mongoose.connect('mongodb://localhost:27017/meituan', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;

db.once('open', () => {
  console.log("连接数据库成功")
})

db.on('error', function(error) {
  console.error("Error in MongoDb connection:" + error)
  mongoose.disconnect()
})


module.exports = db
