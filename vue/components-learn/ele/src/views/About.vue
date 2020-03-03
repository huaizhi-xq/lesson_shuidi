<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="click">点击</button>
  </div>
</template>


<script>


export default {
  methods: {
    click() {
      this.$toast.show("about你好啊")
    }
  }
}
</script>