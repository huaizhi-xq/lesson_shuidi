<template>
 <div id="app">
    
    
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/about">关于</router-link>
        </li>
        <li>
          <router-link to="/jiangxi">jiangxi</router-link>
        </li>
      </ul>
    </nav>  
    <router-view></router-view>
 </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
