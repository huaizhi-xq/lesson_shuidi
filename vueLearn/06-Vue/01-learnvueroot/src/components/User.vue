<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户信息</p>
    <h2>{{userId}}</h2>
    <!-- 获取路由的参数 -->
    <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      // 处于活跃的路由
      return this.$route.params.userId
    }
  },
  methods: {
    btnClick() {
      // 所有组件都继承自vue类的原型
      console.log(this.$router)
      console.log(this.$route)

    }
  },
  created() {
    console.log('created')
  },
  destroyed() {
    console.log('destroyed')
  },
}
</script>

<style>

</style>