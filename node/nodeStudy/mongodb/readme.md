- Mongodb (都是异步API 可以通过callback和Promise操作)
  可视化界面 compass
- 数据库相关概念
  database:数据库 collection: 集合 document: 文档 field: 字段
- Mongoose第三方包                                                                                                                               .connect()
- 增删改查
  1. 创建集合
    一是对集合设定规则 二是创建集合
  2. 创建文档
    一是创建集合实例 二是调用实例对象下的save方法将数据保存到数据库中
    .create(文档，callback)
  3. mongoDB数据库导入数据
    mongoimport
    mongoimport -d playground -c user --file ./user.jso
  4. 查询文档
    find()   返回一组   条件为空则查询所有文档
    findOne() 返回一个
    04.js
  5. 删除文档
    .findOneAndDelete
    .deleteMany
  6. 更新文档
    .updateOne
    .updateMany
- mongoose 验证
  再创建集合规则时 设置验证规则
  required: true 必须传字段
  minlength
  maxlength
  min
  max
  enum: ['html','css' ...]
  trim: true
  validate 自定义验证器
  default: 默认值
- 集合关联
  1. 使用id对集合进行关联
  2. 使用populate()方法进行关联集合查询