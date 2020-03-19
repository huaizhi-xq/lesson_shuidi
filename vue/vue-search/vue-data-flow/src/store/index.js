import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //rootState
    login: false,  //是否登陆了
    userInfo: null, //头像  昵称
    cartList: [] //购物车  小型
    // 下单页面  发表评论  vue-router
    // user,
    // cart,
    // products
  },
  mutations,
  actions,
  modules: {

  }
})
