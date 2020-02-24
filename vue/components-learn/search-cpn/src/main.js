import Vue from 'vue'
import App from './App.vue'
import iView from 'iview' //UI组件库 70%常用  成熟UI框架
import 'iview/dist/styles/iview.css'

import router from './router/index'



Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
