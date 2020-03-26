<template>
  <div id="app">
    <!-- 省 -》 市 -》 县 -->
    <el-tree 
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2,3]"
      :default-checked-keys="[5]"
      >
    </el-tree>
    <c-tree :data="myData">

    </c-tree>
  </div>
</template>

<script>

import CTree from '@/components/CTree.vue'

export default {
  name: 'App',
  components: {
    CTree
  },
  data() {
    return {
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        },
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        },
        {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ],
      myData: [
         {
          name: 'Web秀',
          children:[{
            name: "web前端",
            children: [{
                name: 'css'
              }, {
                name: 'JavaScript'
              }, {
                name: 'Vue'
              }, {
                name: '小程序'
              }, {
                name: 'THREE.JS'
              }],
          },
          {
            name: '服务器'
            }, 
            {
            name: "工具类"
            }
          ],
         },
          {
            name: "今日头条",
            children: [{
              name: "图片"
            }, {
              name: "新闻"
            },]
          },
           {
              name: "Angular"
            }
         
      ]
    }
  }
}


</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
