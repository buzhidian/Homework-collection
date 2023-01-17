import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MyLogin from '../views/MyLogin.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MyLogin
  },
  {
    path: '/mylogin',
    name: 'MyLogin',
    component: () => import('../views/MyLogin.vue')
  },
  {
    path: '/myindex',
    name: 'MyIndex',
    component: () => import('../views/MyIndex.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home/index.vue')
      },
      {
        path: '/permissionsettings',
        name: 'PermissionSettings',
        component: () => import('../views/PermissionSettings/index.vue')
      },
      /**社保页面*/
      {
        path: '/socialsecurity',
        name: 'SocialSecurity',
        component: () => import('../views/SocialSecurity/index.vue')
      },
      /**审批页面*/
      {
        path: '/approval',
        name: 'Approval',
        component: () => import('../views/Approval/index.vue')
      },
      /**考勤页面*/
      {
        path: '/examination',
        name: '/Examination',
        component: () => import('../views/Examination/index.vue')
      },
      /**工资页面*/
      {
        path: '/wages',
        name: 'Wages',
        component: () => import('../views/Wages/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
