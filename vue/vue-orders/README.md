1. 前端 不写node  
  数据流通问题 
  mock 
2. 后端 不写vue 
前后端分离


orders 表 mongodb  10万条订单数据 
migration 100MB

产品经理， 订单 做个报表 
table  20条 分页  
月份 地区 商品 进行数据的筛选 

1. 订单数据展示出来  element-ui
el-table 表格 展示
el-pagination 分页器
2. 数据在哪里？ node？ mock模拟一下
3. mock 的牛逼在于， 未来只要切一个url 就可以上线


- el-table + el-table-column
  数据的展示  数据的可视化  canvas echart
  table  rows > clos
  :data="list" 
  分水岭
  1. table pagination 联动
  数据的 ajax page   list 动起来
  前后端分离
  模拟真实数据   mockjs
  我们现在和后端是分离的   界面开发和后端api开发是异步的
  不能等接口  
  node 写 ？
  mockjs 是业内的解决方案    web easymock
  等到那一天  后端给你接口 只要改下url  无缝上线

  mock.js 
  mock的造数据魔法API  |100
  @cname |+1 Random
  url 提供 
  可拔插的功能  再后端不给力的时候 插入 给力时 拔掉


  前端有了mock   不需要后端在开发阶段支持你
  数据库  mock 本地数据库
  开发业务mock概念
  
  
  vue  .sync 语法
    el-pageination   current-page.sync  
    父组件 data =>  props 