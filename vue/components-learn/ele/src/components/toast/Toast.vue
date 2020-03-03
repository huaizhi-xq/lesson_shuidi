<template>
   
  <div class="toast" v-show="isNone">
    <div >{{message}}</div>
  </div>
    
</template>

<script>
export default {
  data() {
    return {
      message: '默认信息',
      isNone: false
    }
  },
  methods: {
    show(message="默认信息", duration = 1500) {
      this.message = message;
      this.isNone = true;
      setTimeout(() => {
        this.isNone = false;
        this.message = '默认信息'
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 8px;
    z-index: 999;
    color: #fff;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 10px;
  }


</style>