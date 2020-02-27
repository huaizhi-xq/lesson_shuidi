<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    alertText: {
      type: String
    }
  },
  methods: {
    closeTip() {
      this.$emit('closeTip')
    }
  }
}
</script>

<style lang="stylus" scoped>
// stylus 编译 变量  不一样的风格 TabPane 
// 不影响外面 scoped
// 不受外面的影响 不可能的 命名 主动来修改 
  // @import '../../style/minxin';
  .alert_container 
    position fixed
    top 0
    left 0
    right 0
    bottom 0 
    z-index 200
    background-color rgba(0,0,0,.3)
    .tip_text_container
      position absolute
      top 50%
      left 50%
      margin-top -6rem
      margin-left -6rem
      width 12rem
      animation tipMove .4s
      background-color rgba(255,255,255,1)
      border 1px
      padding-top 0.6rem
      display flex
      justify-content center
      align-items center
      flex-direction column
      border-radius  0.25rem
      .tip_icon
        wh(3rem, 3rem)
        border 0.15rem solid #f8cb86
        border-radius 50%
        display flex
        justify-content center
        align-items center
        flex-direction column
        span:nth-of-type(1)
          wh(.12rem, 1.5rem)
          background-color #f8cb86
        span:nth-of-type(2)
          wh(.2rem, .2rem)
          border 1px
          border-radius 50%
          margin-top 0.2rem
          background-color #f8cb8b

</style>