1. 数据流通
  数据绑定 -> 数据流
  - mongodb -> api - > vuex -> component
    1. 数据流源头再mongodb  express  更新数据库服务器通信
    this.$store.state
    mapGetters....

    数据流
    node :3000/user/  :3000/users/tag/:tag

  - 应用场景 vuex 设计思考  mongodb 索引 


  按喜好，把用户查出来， 主要查询时  爱好网站
  db.users.find({tags: 'coding'}).explain("executionStats");   //主要查询的性能
  "stage" : "COLLSCAN", collectionScan 检索整个collection
  "totalDocsExamined" : 4,
     "totalKeysExamined" : 0,  没有利用上一个

  100万用户  查询就会慢下来
  为tags 建立集合索引
  vuex mutations actions
  db.users.ensureIndex({"tags":1});  为tags添加索引
  "stage" : "IXSCAN",  根据索引检索
  db.users.getIndexSpecs(); 查看索引
  db.users.dropIndex("tags_1")  删除索引