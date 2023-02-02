import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Login.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    children: [
      {
        path: '/userIndex',
        name: 'userIndex',
        component: () => import('../views/index/userIndex.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/index/my.vue')
      },
      {
        path: '/tissueIn',
        name: 'tissueIn',
        component: () => import('../views/tissueIn/tissueIn.vue')
      },
      {
        path: '/staffIn',
        name: 'staffIn',
        component: () => import('../views/staff/StaffIn.vue')
      },
      {
        path: '/companyIn',
        name: 'companyIn',
        component: () => import('../views/company/companyIn.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
