<template>
  <div id="app">
    <select name="" id="" @change="querytag">
      <option value="">请选择</option>
      <option value="blogs">博客</option>
      <option value="coding">编程</option>
      <option value="music">音乐</option>
    </select>
    <div v-for="(user, index) in getUsers" :key="index">
      {{user.id}}{{user.name}}
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  data() {   //自己的状态
    return {
      // 数据驱动页面  template
      // 不利于数据的管理
      // vuex 两部分 UI 地方   vuex 中央  
      //用户列表
    }
  },
  computed: {  //中央数据的到来
    ...mapGetters(['getUsers']),
  },
  methods: { 
    // 抽象一点  UI
    ...mapActions(['fetchUser', 'querytag']),
    // 根据tag 把相应的用户找出来
    // 1. tag change value
    // 2. user computed mapGetters
    //    action api 发出新的请求 vuex store
    // 3. api/
    // 4. node router /tag/:tag
   
  },
  mounted() {
    // ajax  二层 TCP 三次握手 安全 
    // this.$store.dispatch('fetchUser')
    this.fetchUser();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
