<template>
  <div id="app">
    <product-list />
    <shopping-cart></shopping-cart>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
export default {
  components: {
    ShoppingCart,
    ProductList
  },
  mounted() {
    // console.log(this.$store.state.products.all)
    // console.log(this.$store.state.cart.items)
    // 获取商品  MVVM lsit展示
    // this.dispatch('')
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
}

#nav {
  padding: 30px;
}

[disabled] {
  cursor: not-allowed;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
