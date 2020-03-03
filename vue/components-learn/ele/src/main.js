import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toast from './components/toast/index'

Vue.use(Toast)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
