import Vue from 'vue'
import Vuex from 'vuex'
// 商品模块的数据管理分离
import products from './modules/products'
import cart from './modules/cart'  //集中化管理 
Vue.use(Vuex)

// 单一状态树  状态不会有问题 
export default new Vuex.Store({
  state: {  //根节点
    // 登陆状态  全局共享状态
    userInfo: {
      uid: 10001,
      username: 'pony'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {  
    cart,  //当应用复杂起来的时候 
    products //叶节点
  }
})
