<template>
  <ul class="switches">
     <li class="switch-item" :class="{'active': currentIndex === index}" @click="switchItem(index)"
     v-for="(item, index) in switches" :key="item.id"
     >
      <span>{{item.name}}</span>
     </li>
  </ul>

</template>
<script>
export default {
  props: {
    switches: {
      name: Array
    },
    currentIndex:{
      type: Number,
      // default: 0
    }
  },
  methods: {
    switchItem: function(index) {
      console.log(index);
      this.$emit('switch', index)
    }
  }
}
</script>
<style lang="stylus">
@import "../../common/styl/variable"
.switches
  display flex
  align-items center
  width 240px
  margin 0 auto
  .switch-item
    flex 1
    padding 8px
    margin 0 20px
    text-align center
    font-size $font-size-medium-x
    color $color-text-g
    border-bottom 2px solid $color-theme
    &.active
      color #ffffff
      border-bottom 2px solid $color-text-l
</style>