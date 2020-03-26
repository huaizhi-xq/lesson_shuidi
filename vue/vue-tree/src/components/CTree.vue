<template>
<!-- 菜单 -->
  <div class="tree-menu">
    <ul v-for="item in data" :key="item.name">
      <!-- <li>{{item.name}}</li> -->
      <!-- 一个节点  组件 算法思想  递归-->
      <tree-item :data="item">

      </tree-item>
    </ul>
  </div>
</template>

<script>
import TreeItem from '@/components/CTreeItem'
export default {
  name: 'CTree',
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    TreeItem
  }
}
</script>

<style>

</style>