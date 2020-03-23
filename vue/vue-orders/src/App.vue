<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

  <h1>订单管理</h1>
  <!-- el-form -->
  <el-table
    v-loading="listLoading"  
    :data="list"
    >
    <el-table-column label="ID" prop="_id" align="center" width="80" >
      <template slot-scope="{row}">
        <span >{{row._id}}</span>
      </template>
    </el-table-column>
    <el-table-column label="Name" prop="name" align="center" width="200" >
      <template slot-scope="{row}">
        <span >{{row.name}}</span>
      </template>
    </el-table-column>
    <el-table-column label="OrderDate" prop="orderDate" align="center" width="400" >
      <template slot-scope="{row}">
        <span >{{row.orderDate}}</span>
      </template>
    </el-table-column>
    <el-table-column label="状态" prop="status" align="center" width="100" >
      <template slot-scope="{row}">
        <span >{{row.status}}</span>
      </template>
    </el-table-column>
    <el-table-column label="邮费" prop="shippingFee" align="center" width="100" >
      <template slot-scope="{row}">
        <span >{{row.shippingFee}}</span>
      </template>
    </el-table-column>
     <el-table-column label="单价" prop="total" align="center" width="100" >
      <template slot-scope="{row}">
        <span >{{row.total}}</span>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    :total="page.total"
    :pageSize="page.limit"
    :current-page.sync="page.page"
    layout="total,prev, pager, next"
    @current-change="handleCurrentChange"
    >
  </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      page: {
        page: 1,
        total: 0,
        limit: 20,
      },
      listLoading: true,  //加载数据中
      list: []
    }
  },
  mounted() {
    this.getData(this.page)
  },
  methods: {
    handleCurrentChange(page) {
        // console.log(page)
        this.page.page = page
        this.getData(this.page)
    },
     getData(page) {
      this.listLoading = true
       axios.post('/api/orders', {
        params: {
          // 分页
          page: page
        }
      })
      .then(res => {
        console.log(res)
        this.list = res.data.result
        this.page.total = res.data.total
        this.listLoading = false
        
      })
      // axios.get('/api/orders?page=1')
      
    }
  }
}
</script>  

<style>
.red {
  color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
