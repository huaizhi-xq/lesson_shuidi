// 数据管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Api from '@/api/shop.js'


export default new Vuex.Store({
  state: {  //data   react redux
    products: []
  },
  getters: {
    getPro(state) {
      return state.products
    }
  },
  mutations: {
    get(state, _products) {
      state.products = _products
    }
  },
  actions: {
    reqProducts({commit}) {
      Api.getProducts((_products) => {
        commit('get', _products)
      })
    }
  }
})