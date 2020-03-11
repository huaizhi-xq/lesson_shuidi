<template>
  <div id="app">
    <div v-for="(img, index) in images" :key="index">
      <img v-lazy="img" alt="">
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      images: []
    }
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
