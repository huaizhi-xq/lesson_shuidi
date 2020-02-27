<template>
  <div id="app">
    <!-- <search/> -->
    <alert-tip v-if="showAlert" :alertText="alertText" @closeTip="closeTip" />
    <button @click="showCancelAlert">推出</button>
    <button @click="showLoginAlert">登陆</button>

    <router-view />
  </div>
</template>

<script>
// import Search from './components/Search'
// import SignUp from './components/SignUp'

import AlertTip from './components/common/alertTip'

export default {
  name: 'App',
  components: {
    AlertTip
  },
  mounted() {

  },
  data() {
    return {
      showAlert: false,
      alertText: ""
    }
  },
  methods: {
    showCancelAlert() {
      console.log('++++')
      this.alertText = "你真的要推出吗"
      this.showAlert = true;
    },
    showLoginAlert() {
      this.alertText = "你真的要登陆吗吗"
      this.showAlert = true;
    },
    closeTip() {
      this.showAlert = false;
    }
  }
  
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  padding: 0 15px;
}
</style>
