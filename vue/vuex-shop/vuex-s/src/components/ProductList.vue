<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}} | {{product.price}}
        <br>
        <button :disabled="!product.inventory" @click="addProductToCart(product)">
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  created() {  // 比mounted更早发生
    this.$store.dispatch('products/getAllProducts')
  },
  computed: 
    mapState({
      products: state => state.products.all
    }),
  methods: mapActions('cart', [
    'addProductToCart'
  ])
  
  
}
</script>

<style>

</style>