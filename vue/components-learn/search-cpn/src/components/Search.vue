<template>
  <div>
    <div class="container">
      <i-input v-model="searchData" 
        class="search" size="large"
        placeholder="输入你想查找的商品">
        <Button slot="append" icon="ios-search" @click="search" />
      </i-input>
      <Tag v-for="(item,index) in promotionTags" 
          closable 
          @on-close = "closeTags(index)"
         :key="index">
         <span @click="selectTags(index)">{{item}}</span>    
      </Tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: '',
      promotionTags: ['买2送1','龄200','买200送1间',]
    }
  },
  methods: {
    search() {
      // console.log(this.searchData)
      // 跳转链接来执行
      this.$router.push({
        path: '/search',
        query: {
          searchData: this.searchData
        }
      })
    },
    selectTags(index) {
      this.searchData = this.promotionTags[index]
    },
    closeTags(index) {
      this.promotionTags.splice(index,1)
    }
  }
}
</script>

<style scoped>
  .container {
    padding-top: 15px;
    margin: 0 auto;
    margin-bottom: 1px;
    width: 460px;
  }
  .search {
    margin: 5px 0;
  }
</style>