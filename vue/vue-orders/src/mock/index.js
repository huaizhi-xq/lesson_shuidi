import Mock from 'mockjs'

// mock和后端一样  url  返回的结果
// const Random = Mock.Random
// const total = 100
// const dataList = []

// for (let i = 0; i < total; i++) {
//   const template = {
//     "_id": i+1,
//     "name": Random.name(),
//     "orderDate": Random.date(),
//     "status": Random.integer(-1, 1),
//     "shippingFee": Random.float(0,8,0,2),
//     "total": Random.float(10,100,0,2)
//   }
//   dataList.push(template)
// }
// Mock.mock('/api/orders', 'get', params => {
//   console.log(params, '---')
//   return {
//     // page,
//     // total
//     dataList
//   }
// })

// 扩展随机字符串
// Mock.Random.extend({
//   constellation: function() {
//       var constellations = ["created", "completed","canceled"]
//       return this.pick(constellations)
//   }
// })

//假数据模板  
const data = {
  'orders|100': [{  //生产一百条
    "_id|+1": 1,  //id 自增
    "name": "@cname",
    "orderDate": "@datetime",
    // "status": "@CONSTELLATION", //在三种状态里随机
    "status": "@pick(['created', 'completed', 'canceled'])",//在三种状态里随机
    "shippingFee": "@float(0,8,0,2)",
    "total": "@float(0,100,0,2)"
  }]
}
//生成数据
const dataList = Mock.mock(data)
// console.log(dataList)
// url -> node api url
// 设置请求响应时间
Mock.setup({
  timeout: 2000
})
// 定义请求
Mock.mock('/api/orders', 'post', params => {
  // console.log(params)
  //将body转化为JSON格式
  const info = JSON.parse(params.body).params
  // console.log(info)
  // 解析出当前页，每页大小，和数据总数
  let [page, size, total] = [info.page.page, info.page.limit,dataList.orders.length]
  // console.log(page, size, total)
  //实现分页，根据page的截取数据
  let result = dataList.orders.slice((page-1) * size, page * size)
  //将分页数据和数据总数返回
  return {
    result,
    total
  }
})

// Mock.mock(RegExp('/api/orders'+ ".*"), 'get', params => {
//   // console.log(typeof params.url)
//   let info = params.url.slice(params.url.lastIndexOf('?')+1,params.url.length).split('=')
//   let page = info[1]
//   console.log(page)

// })

// Mock.mock('GET /api/orders', (req, res) => {
//   const {query} = req
//   console.log(query)
// })

export default Mock