<template>
  <li>
    <span @click="toggle">
      <em v-if="hasChild" class="icon">{{open?'-':'+'}}</em>
      <em v-else class="icon file-text">.</em>
      {{data.name}}
    </span>
    <ul v-if="hasChild" v-show="open">
      <tree-item v-for="(item, index) in data.children" :data="item" :key="index">
      </tree-item>
    </ul>
  </li>
</template>

<script>


export default {
  name: 'TreeItem',
 
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    hasChild() {
      return this.data.children && this.data.children.length
    }
  },
  methods: {
    toggle() {
     if (this.hasChild) {
        this.open = !this.open
     }
    }
  }
}
</script>

<style>

</style>