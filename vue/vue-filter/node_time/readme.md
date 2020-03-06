时间处理在后台时
数据存储 mongodb date


ISODate mongodb日期格式  零时区

Date()    本地时间
new Date() ISODate   -》 toLocaleString() -> 本地时间

ISODate 国际时间  
local

orders 订单表
某个月的订单  总金额 时间
1. dump.tar.gz 文件
26.3MB数据
.tar.gz linux 压缩文件
导入mongodb 复杂的运算


tar -zxvf dump.tar.gz  linux 文件解压
dump/
dump/mock/    mock db
dump/mock/orders   collection
dump/mock/orders.bson    .bson文档数据的类型

bson数据文件

mongorestore -h 127.0.0.1:27017 dump 重新存储  导入数据

db.orders.count(); 数据多少

dp.dropDatabase();   删除数据库

rm -rf dump 删除目录

120MB 所有订单的总销售额是多少？

$gte >= $lt <  

所有订单总金额
每一个记录都要
mongodb适合大数据

aggregate  聚合查询

$match where
$group group by

group by

2019年 第一季度 已完成订单的订单总金额和订单总数
db.orders.aggregate([ 
   {  $match: {     status: "completed",     orderDate: {       $gte: ISODate("2019-01-01"),       $lt: ISODate("2019-04-01")     }   } }, 
   {   $group: {     _id: null,     total: { $sum: "$total"},     shippingFee: { $sum: "$shippingFee"},     count: {$sum: 1}   } }, 
   {   $project: {     grandTotal: {       $add: ["$total", "$shippingFee"]     },     count: 1,     _id: 0   } } 
   ]);


time  mongodb 还会有什么？


todo 活动 activity  开始日期  结束时日期 time


db.todos.find({}).pretty()  格式化输出

给字符串时间  也可以给时间戳  都会转换为ISODate存储

