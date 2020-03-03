<template>
  <div class="home">
    <h1>This is an home page</h1>
    <button @click="click">点击</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  methods: {
    click() {
      this.$toast.show("home你好啊")
    }
  }
}
</script>
