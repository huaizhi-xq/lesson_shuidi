import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// 相当于使用全局的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios({
//   url: '/home/multidata',
//   method: 'get'
// }).then(res => {
//   // console.log('------')
//   console.log(res)
// })

// axios({
//   url: 'http://localhost:3001/cross',
//   // 专门针对get请求参数拼接
//   // params: {
//   //   page: 1
//   // }
// }).then(res => console.log(res))

// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }), axios({
//   url: 'http://localhost:3001/cross'
// })]).then(res => {  //也可以用axios.spread((res1,res2) => {})
//   console.log(res)
//   // console.log(res[1])
//   // console.log(res[0])
// })



// 创建axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => console.log(res))

// const instance2 = axios.create({
//   baseURL: 'http://localhost:3001',
//   timeout: 10000
// })

// instance2({
//   url: '/cross'
// }).then(res => console.log(res))

// 封装request模块
import {request} from './network/request'
request({
  url: '/home/multidata'
}).then(res => console.log(res))
  .catch(err => console.log(err))