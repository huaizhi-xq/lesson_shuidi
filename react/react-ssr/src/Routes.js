import React from 'react';
import IndexRoute from './IndexRoute'
import Home from './pages/home'
import Login from './pages/login'
// IndexRoute 全局组件，无论加载那个路由，都会加载IndexRoute
export default [
  {
    path: '/',
    component: IndexRoute,
    
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
      },
      {
        path: '/login',
        component: Login
      }
    ]
  }
]