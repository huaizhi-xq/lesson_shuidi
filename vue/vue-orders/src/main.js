import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mock from '@/mock'  //为应用引入mock 自己来模拟 假数据格式和未来的真数据是一样的 把功能开发完整
// 后台管理项目，数据报表  老板  运营  订单数据如何
// 时间  分页 排序 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // Mock,
  render: h => h(App)
}).$mount('#app')
