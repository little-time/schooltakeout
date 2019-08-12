import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true
      },
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

// router.beforeEach((to, from, next) => {
//   // 登录界面登录成功之后，会把用户信息保存在会话
//   // 存在时间为会话生命周期，页面关闭即失效。
//   let userName = sessionStorage.getItem('username')
//   if (to.path === '/login') {
//     // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
//     if (userName) {
//       next({ path: '/' })
//     } else {
//       next()
//     }
//   } else {
//     if (!userName) {
//       // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
//       next({ path: '/login' })
//     } else {
//       next()
//     }
//   }
// })

export default router