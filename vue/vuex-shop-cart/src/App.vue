<template>
  <div id="app">
    <!-- 数据晚一步考虑 -->
    <!-- vue 切页面 -->
    <div v-for="(product, index) in this.$store.getters.getPro" :key="index">
      {{product.title}}
    </div>
  </div>
</template>

<script>

import Api from "@/api/shop.js";

// 单一状态树 怎么获取状态
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      products: []
    }
  },
  methods: {
   ...mapGetters(['getPro'])
  },
  mounted() {
    // console.log(Api)
    // Api.getProducts((_products) => {
    //   this.products = _products
    // });
    // console.log(this.$store)

    this.$store.dispatch('reqProducts') 
    // console.log(this.$store.state.products)
    // console.log(this.$store.getters.getPro)
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
