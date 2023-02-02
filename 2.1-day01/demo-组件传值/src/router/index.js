import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {path:"/",redirect:"first"},
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
    path: '/first',
    name: 'first',
    component: () => import('../views/First.vue')
  },
  {
    path: '/second',
    name: 'second',
    component: () => import('../views/Second.vue')
  },
  {
    path: '/third',
    name: 'third',
    component: () => import('../views/Third.vue')
  },
  {
    path: '/forth',
    name: 'forth',
    component: () => import('../views/Forth.vue')
  },
  {
    path: '/fifth',
    name: 'fifth',
    component: () => import('../views/Fifth.vue')
  },
  {
    path: '/sixth',
    name: 'sixth',
    component: () => import('../views/Sixth.vue')
  },
  {
    path: '/seventh',
    name: 'seventh',
    component: () => import('../views/Seventh.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
