const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  "address": {
    "city": {
      type: String
    },
    "state": {
      type: String
    },
    "pincode": {
      type: String
    }
  },
  "tags": [
    {type: String}
  ],
  "name": {type: String}
})

const User = mongoose.model('User', userSchema)

// User.create({


//   "address": {
//     "city": "江西",
//     "state": "南昌",
//     "pincode": "123000"
//   },
//   "tags": [
//     "coding",
//     "palying",
   
//   ],
//   "name": "小明"
// },
//  {
//   "address": {
//     "city": "江西",
//     "state": "宜春",
//     "pincode": "123111"
//   },
//   "tags": [
//     "coding",
//     "swim",
   
//   ],
//   "name": "小红"
// },
// {
//   "address": {
//     "city": "江西",
//     "state": "丰城",
//     "pincode": "12322"
//   },
//   "tags": [
//     "coding",
//     "games",
   
//   ],
//   "name": "张三"
// })

module.exports = User