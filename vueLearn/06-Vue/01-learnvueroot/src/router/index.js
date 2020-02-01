// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

// 1. 通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 2. 创建VueRouter对象
const routes = [
  {
    // 路由的默认
    path: '/',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '/',
      //   redirect: 'news'

      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  // 改变为history模式
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置钩子
router.beforeEach( (to, from, next) => {
  // from => to
  document.title = to.matched[0].meta.title
  // console.log(to)
  // console.log('++++')
  next()
})
// 后置钩子
router.afterEach((to, from) => {
  // console.log('-----')
})

// 3. 将router对象传入到Vue实例
export default router
