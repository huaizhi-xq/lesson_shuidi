import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home/Home'
import About from '../views/about/About'
import View from '../views/view/View'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/*',  // *匹配所有
    component: View
  },
]

const router = new Router ({
  routes,
  base: process.env.BASE_URL
  // mode: 'history'
})

export default router