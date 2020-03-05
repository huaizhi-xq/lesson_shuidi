<template>
  <div id="app">
    时间 {{t | format_data}}
    <div> {{moment()}} </div>
    <div> {{moment().format('YYYY-MM-DD HH:mm:ss')}} </div>
    <!-- <div>过去多少时间{{moment().startOf('day').fromNow()}};</div> -->
    <div>{{moment().diff(moment(t), 'minutes')}}分钟前</div>
    <!-- 优惠劵 -->
    <div>{{moment('2020-02-29').add(4,'day').format('YYYY-MM-DD ')}}</div>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  data() {
    return {
      // 
      t: 1583391253205,
      moment
    }
  },
  computed: {

  },
  // 过滤器  人民币 =》 美元  
 
  
}
</script>

<style>

</style>
