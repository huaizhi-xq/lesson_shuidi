// commonJS模块化
const {add, mul} = require('./js/mathUtil')

console.log(add(2,3))
console.log(mul(2,3))

// es6模块化
import {name, age} from './js/info'
console.log(name + ' ' + age)


// 使用Vue开发
import Vue from 'vue'

// import App from './vue/app'
import App from './vue/App.vue'

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

document.writeln('<span>哈哈</span>')