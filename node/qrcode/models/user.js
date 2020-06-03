const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: String,
  password: String,
  // token client端 localStroge
  token: String
})

module.exports = mongoose.model('User', UserSchema)