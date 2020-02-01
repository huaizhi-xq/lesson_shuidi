import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

// 2. 创建对象
// 创建模块A


const state =  {
  counter: 1000,
  students: [
    {id: 1, name: 'a', age: 20},
    {id: 2, name: 'b', age: 30},
    {id: 4, name: 'd', age: 30},
    {id: 3, name: 'c', age: 10},
  ],
  info: {
    name: 'xx',
    age: 18
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
    b: {

    }
  }
})

// 导出
export default store