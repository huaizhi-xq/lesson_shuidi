前后端分离


如果有上万条数据？  insertMany([])
mysql  几十万条，
千万条， 亿  mongodb   spark  hadoop  elasticsearch  
查询 查的更快一些  性能优化
查询需求
quantity 由频繁的需求 100-200  需要 用户怎么访问 产品经理  
就一个这个需求， 加这个索引， 在数据库和node中间， 有index存在
type  +  quantity 一起来查找 
.explain("executionStats");
索引的设置在于查询需求，  
