const fs = require('fs')
fs.readFile('./04require.js','utf-8',(err,doc) => {
  // 如果文件读取出错err是一个对象 包含错误信息
  // doc是文件读取结果
  console.log(err);
  console.log(doc);
})