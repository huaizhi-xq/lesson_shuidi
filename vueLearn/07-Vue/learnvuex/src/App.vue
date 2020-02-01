<template>
  <div id="app">
    <h2>------modules</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updataName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdataName">异步修改名字</button>
    <h2>------info对象</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updataInfo">修改信息</button>
    <h2>------mutations</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>------getters</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>
    <h2>-----hellovuex</h2>
    <hello-vuex></hello-vuex>

    <router-view/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT} from './store/mutation-types'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '哈哈哈',
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit('decrement');
    },
    addCount(count) {
       // payload负载
      //  1.普通的提交风格
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交风格
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent() {
      const stu = {id: 144, name: 'zz', age: 18}
      this.$store.commit('addStudent', stu);
    },
    updataInfo() {
      // this.$store.commit('updataInfo')
      // this.$store.dispatch('aUpdataInfo', {
      //   message: '我是携带的信息',
      //   success: function() {
      //     console.log('里面已经完成了')
      //   }
      // })
      
      this.$store
        .dispatch('aUpdataInfo', '我是携带的信息')
        .then(res => console.log('里面完成了' + res))
    },
    updataName() {
      this.$store.commit('updataName', 'lisi');
    },
    asyncUpdataName() {
      this.$store.dispatch('aUpdataName')
    }
  }
}
</script>

<style>

</style>
