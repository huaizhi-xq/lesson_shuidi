// 数据库层分离
module.exports = app => {
  // mongodb的驱动
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/mybolg',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
    .then(() => console.log('连接成功'))
    .catch(err => console.log(err))
}