import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 共享状态  父子  不再由组件私有  所有中央来调配
// lbs  应用  经纬度共享
export default new Vuex.Store({
  state: {
    latitude: 115,
    langtitude: 28,
    // shops: [] //不太ok
  },
  // vuex 应用即将大型化  数据管理 也将分库 大仓库 分成很多小的仓库
  modules: {
    
  }
})

