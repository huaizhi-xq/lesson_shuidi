- NOSQL
  MYSQL 关系型数据库，
  database -> table -> fields
  NOSQL 不需要写SQL语句 文档型数据库
  JSON object {} .sava()
  find({}) 
  碎片化的， 结构性并不是很良好的数据存储
  Mongodb 云开发数据库就是线上版的 

-    MYSQL           MONGODB
  关系型数据库         NOSQL    Facebook  文档型
  show databases;     show dbs;
              use db;
   tables;            collections;
   SQL                js 语法的面向对象api
   
- 连接mongodb
  url mongodb://
- db.createCollection('site', function(err, res) {
  // err 出错
  // 异步的， 耗时的， 
  // js里执行的代码不会阻塞， 
  db.close();
})
 代码顺序
 1. createCollection
 2. db.close() 在外面
 执行顺序 
 1. create -> 去到mongodb -> create -> 回来跟我说
 2. 接着往后执行 

 dbbase.createCollection()  创建表
 dbbase.collection("xq_site").insertOne() 插入数据
 dbbase
    .collection("xq_site")
    .find({"name": "潘志韦"})
    .toArray() 查询

- 数据库, 后端开发框架
  express 
  node, 后端就是app
  app.get('/', (req, res) => res.send('hello world'))
  app.listen(3000, )