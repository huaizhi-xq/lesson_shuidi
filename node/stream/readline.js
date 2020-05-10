const readline = require('readline')
// console.log('???????????')
const fs = require('fs')
const rl =  readline.createInterface({
  // input: process.stdin,
  // output: process.stdout
  input: fs.createReadStream('./readme.md')
})

rl.on('line', lineData => {
  console.log(lineData)
})

// 日志处理
// 逐行读取日志？  优雅
// 使用流
// 不使用流 整个读取然后逐行切割