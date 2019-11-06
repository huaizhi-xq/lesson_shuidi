//fileSystem 内置模块
const fs = require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

// console.log('hello node');
const image = fs.readFileSync('car.png').toString("base64");
// console.log(image);
const client = new AipImageClassifyClient('17711750'
,'UGe4MnVhCP62OPhPS578MGiO'
,'RHw6NBNLVP18ylKheHm5TiBT8krGag3Y'); //实例化
client
  .carDetect(image)
  .then(function (result) {
      console.log(result);
  });
// AipImageClassifyClient
//回调函数
// 文件在哪？磁盘里
// js文件 在哪运行？ 内存之中 I/O操作
// fs.readFile('./text.txt',function (err,data) {
//     if(err){
//         return console.error(err);
//     }
//     console.log(data.toString());
// });