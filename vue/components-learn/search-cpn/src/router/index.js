import Vue from 'vue'
import Router from 'vue-router'

// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }



const Search = () => import('../views/Search')
const SignUp = () => import('../views/SignUp')
// import Search from '../views/Search'




Vue.use(Router)

const routes = [
  {
    path: '/search',
    component: Search
  },
  {
    path: '/signup',
    component: SignUp
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router