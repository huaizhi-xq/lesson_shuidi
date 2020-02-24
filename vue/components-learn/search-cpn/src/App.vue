<template>
  <div id="app">
    <!-- <search/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Search from './components/Search'
import SignUp from './components/SignUp'

export default {
  name: 'App',
  components: {
    Search,
    SignUp
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
