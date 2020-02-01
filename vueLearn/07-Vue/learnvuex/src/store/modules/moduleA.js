export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updataName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdataName(context) {
      setTimeout(() => {
        context.commit('updataName', 'wangwu')
      },1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111'
    },
    fullName2(state, getters) {
      return getters.fullName + '222'
    },
    fullName3(state, getters, rootState) {
      // rootState拿到根的counter属性
      return getters.fullName2 + rootState.counter
    },

  }
}