import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutation-types'

// 1.安装插件
Vue.use(Vuex)

// 2. 创建对象
// 创建模块A
const moduleA = {
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
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
     
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updataInfo(state) {
      state.info.name = 'yyy'
      // 响应式系统只监听了在state中初始化了的
      // state.info['height'] = 1.85
      // set方法会将其加入响应式系统中
      // Vue.set(state.info, 'height', 1.85)
      // 该方式做不到响应式
      // delete state.info.age
      // Vue.delete(state.info, 'age')

      // 不能进行异步操作
      // setTimeout(() => {
      //   state.info.name = 'yyy'
      // }, 1000)
    }
  },
  actions: {
    // content上下文
    // aUpdataInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updataInfo')
    //     console.log(payload.message)
    //     payload.success();
    //   }, 1000)
    // }


    aUpdataInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updataInfo')
          console.log(payload);
          resolve('1111');
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(item => item.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return age => {
        return state.students.filter(item => item.age > age)
      }
    },
  },

  modules: {
    a: moduleA,
    b: {

    }
  }
})

// 导出
export default store