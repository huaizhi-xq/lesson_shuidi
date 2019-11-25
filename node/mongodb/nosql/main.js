const express = require('express'); //node 开发框架
const ejs = require('ejs'); //模板引擎
const app = express();
var MongoClient = require('mongodb').MongoClient;
// mongodb 连接是用mongodb:// 协议  27017端口
// mysql 3306
var url = 'mongodb://192.168.31.128:27017/runoob';
var dbbase;
MongoClient.connect(url, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) {
    throw err;
  }
 dbbase = db.db("runoob");
});

app.get('/', (req, res) => {
  dbbase
    .collection("xq_site")
    .find({"name": "潘志韦"})
    .toArray(function(err, result) {
      if (err) throw err;

      console.log(result);
      // db.close();
      ejs.renderFile("views/index.html", {  //ejs 渲染 
        title: 'hello',
        items: result
      }, function(err, data) {
        res.end(data);
      })
    });
})
app.listen(3000, console.log('启动成功...'));