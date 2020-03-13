import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
Vue.use(Vuex)

// 单一状态数   单一？ 树？ 
export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {  //相当于计算属性
    getUsers(state) {  //state 读操作
      return state.users.map((user, index) => {
        user.id = index
        return user
      })
    }
  },
  mutations: {    //用于修改state    严格只能用这个
    setUsers(state, users) {
      // console.log(users)
      state.users = users
    }
  },
  actions: { //写入状态的第一步
    // 和api通信的地方
    fetchUser(context) {
      api.getUsers((users) => {
        // console.log(users)
        // console.log(context)
        context.commit('setUsers', users)
      })
    },
    querytag(context, evt) {
      // console.log(evt)
      const tag = evt.target.value
      // console.log(tag)
      api
        .getUserByTag(tag, (users) => {
          context.commit('setUsers', users)
        })
    }
  },
  modules: {
  }
})
