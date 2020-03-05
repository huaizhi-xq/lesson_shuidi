import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false
// 全局
Vue.filter('format_data', function format_data(value) {
      const date = new Date(value)
      // return `${date.getFullYear()}年${date.getMonth() + 1}月
      // ${date.getDate()}日${date.getHours()}时
      // ${date.getMinutes()}分${date.getSeconds()}秒`
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
