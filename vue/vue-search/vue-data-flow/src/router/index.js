import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Good from '../views/Good.vue'

// Vue.component("Goods", {
//   template: `
//   <div>Goods</div>
//   `
// })


// const GoodsDetails = () => {
//   return `
//     <template>GoodsDetails</dtemplateiv>
//   `
// }

// const Home = { template: '#home' };
// const News = { template: '#news' }

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home,
    redirect: '/goods',
    children: [
      // {
      //   path: 'home',
      //   component: Home
      // },
      {
        path: 'goods',
        component: Good
      },
      {
        path: '/goodsDetails',
        name: 'goodsDetails',
        component: GoodsDetails
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由钩子
router.beforeEach(function(to, from, next) {
  console.log("路由在变化")
  console.log(to, from)
  next()
})

export default router
