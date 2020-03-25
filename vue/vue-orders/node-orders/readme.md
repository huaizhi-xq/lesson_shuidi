1. mongodb 和 mysql 本质区别？
  - NOSQL  SQL 数据库的三大范式
  - NOSQL doc存储 允许一定的存储冗余
  
  uer_id name orders 
  1. 展示订单  分页 element-ui PC后台 运营部门 老板
    总数 第一季度 单品最佳。。。
  2. 用户来说  最多查询是什么 ？ 
    price -> products 相关性查询 推荐
    orders 我的订单 user_id name 不需要关联  user表

orders  orderLines total  便于查询 用户
- 总销量
  total -> order_id 
  $sum total
  aggregate查询 

  第一季度  每个州  销量最多的 sku的第一名
  上一个查询的结果是下一个查询的输入  aggregate的应用场景
  1. 第一季度 
    "orderDate" ISODate() $lt $gt 2019 第一季度
  2. 每个州
    "state" 分组的依据 $group state
  3. 销量最多
    "orderLines".sku $group 分组 $sum orderLines."qty"
  4. sku  
    第一名 orderby 

  $match == where 
    有效订单  status: "completed"
  state + sku 分组  每个订单中 多个sku  1多对  => $unwind 展开orderLines  -> $group 分组   _id :{ state + sku } count $sum qty


    
     db.orders.aggregate([ {   $match:{ status: "completed",orderDate:{$gte:ISODate("2019-01-01"),$lt:ISODate("2019-04-01")} }}]);

     db.orders.aggregate([ {   $match:{ status: "completed",orderDate:{$gte:ISODate("2019-01-01"),$lt:ISODate("2019-04-01")} }} , { $unwind: "$orderLines"}] );

      db.orders.aggregate([ {   $match:{ status: "completed",orderDate:{$gte:ISODate("2019-01-01"),$lt:ISODate("2019-04-01")} }} , { $unwind: "$orderLines"}, { $group: { _id: { state: "$state",sku:"$orderLines.sku"},count: {$sum:"$orderLines.qty"}}}]);

      db.orders.aggregate([ {   $match:{ status: "completed",orderDate:{$gte:ISODate("2019-01-01"),$lt:ISODate("2019-04-01")} }} , { $unwind: "$orderLines"}, { $group: { _id: { state: "$state",sku:"$orderLines.sku"},count: {$sum:"$orderLines.qty"}}}, { $sort: {"_id.state": 1,"count":-1}} ]);

      db.orders.aggregate([ {   $match:{ status: "completed",orderDate:{$gte:ISODate("2019-01-01"),$lt:ISODate("2019-04-01")} }} , { $unwind: "$orderLines"}, { $group: { _id: { state: "$state",sku:"$orderLines.sku"},count: {$sum:"$orderLines.qty"}}}, { $sort: {"_id.state": 1,"count":-1}}, {    $group: { _id: "$_id.state",sku: { $first: "$_id.sku"},count:{$first:"$count"}} }]);

      db.orders.aggregate([ {   $match:{ status: "completed",orderDate:{$gte:ISODate("2019-01-01"),$lt:ISODate("2019-04-01")} }} , { $unwind: "$orderLines"}, { $group: { _id: { state: "$state",sku:"$orderLines.sku"},count: {$sum:"$orderLines.qty"}}}, { $sort: {"_id.state": 1,"count":-1}}, {    $group: { _id: "$_id.state",sku: { $first: "$_id.sku"},count:{$first:"$count"}} },{$sort:{"_id":1}}]);
