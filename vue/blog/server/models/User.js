const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  
  username: {
    type: String
  },
  password: {
    type: String,
    // 获取用户数据的时候  不要把密码取出去
    select: false, //取不出去 
    set(val) { //insert 操作 
      return bcrypt.hashSync(val, 10)  //不会存明文
    }
  },
})

const User = mongoose.model('User', userSchema, )

module.exports = {
  User
}