import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/index'},
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children:[
      {path:'/index',redirect:'/welcome'},
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/pages/Welcome.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/pages/Goods.vue')
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('../views/pages/Categories.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('../views/pages/Orders.vue')
      },
      {
        path: '/params',
        name: 'params',
        component: () => import('../views/pages/Params.vue')
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import('../views/pages/Reports.vue')
      },
      {
        path: '/rights',
        name: 'rights',
        component: () => import('../views/pages/Rights.vue')
      },
      {
        path: '/roles',
        name: 'roles',
        component: () => import('../views/pages/Roles.vue')
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/pages/Users.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
