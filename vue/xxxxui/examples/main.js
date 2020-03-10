import Vue from 'vue'
import App from './App.vue'
import xxxxui from '../packages'

Vue.use(xxxxui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
