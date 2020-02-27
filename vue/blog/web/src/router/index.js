import Vue from 'vue'
import VueRouter from 'vue-router'


const Home =  () => import( '../views/Home.vue')
const Main =  () => import( '../views/Main.vue')
const Article =  () => import( '../views/Article.vue')
const Tag =  () => import( '../views/Tag.vue')
const About =  () => import( '../views/About.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },

  // 列表页
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  // 文章页
  {
    path: '/article/:id',
    name: 'article',
    component: Article
  },
  // 分类下有多少文章
  {
    path: '/tag',
    name: 'tag',
    component: Tag
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
