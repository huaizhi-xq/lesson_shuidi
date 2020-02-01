import {INCREMENT} from './mutation-types'

export default {
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
}