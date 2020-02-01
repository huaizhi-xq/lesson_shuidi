<template>
  <div >
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
  
      <router-view/>
   
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: '你好啊',
      path: '/home/news'
    }
  },
  created() {
    console.log('created')
    // document.title = '用户'
  },
  destroyed() {
    console.log('destroyed')
  },
  // 这俩个函数只有该组件使用了keep-alive时才有效
  activated() {
    console.log('activated')
    this.$router.push(this.path)
  },
  deactivated() {
    console.log('deactivated')
    // console.log(this.$route.path)
    // this.path = this.$route.path
  },
  beforeRouteLeave(to, from, next) {
    // console.log(this.$route.path)
    this.path = this.$route.path;
    next()
  }
}
</script>

<style>

</style>