// 云函数入口文件
const cloud = require('wx-server-sdk') //云sdk
const got = require('got')

cloud.init() //初始化

// 云函数入口函数
// async 表示异步 await
// event 出事 小程序客户端 callFUnction event代表小程序 
//context 上下文 
exports.main = async (event, context) => {
  let getResponse = await got('httpbin.org/get')
  // console.log(getResponse);
  let postResponse = await got('httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type':
      'application/json'
    },
    body: JSON.stringify({
      title: '这是标题',
      value: 123
    })
  })
  return postResponse.body;
  
  
}