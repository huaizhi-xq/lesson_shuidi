// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App)

/* eslint-disable no-new */

const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: '我是组件message'
    }
  }
}

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function(createElement) {
    // 1.普通用法 createElement('标签', {标签的属性}, ['内容'])
    // return createElement('h2', {class: 'box'}, ['hello word',createElement('button', ['按钮'])])

    // 2. 组件用法
    return createElement(App)
  }
})
