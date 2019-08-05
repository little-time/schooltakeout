import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'


Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'setpost',
          name: 'setpost',
          component: () => import('@/views/MainComponents/SetPost'),
        },
        {
          path: 'getpost',
          name: 'getpost',
          component: () => import('@/views/MainComponents/GetPost'),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
