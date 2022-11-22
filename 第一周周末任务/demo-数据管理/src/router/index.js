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
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children:[
      {path:'/index',redirect:JSON.parse(localStorage.getItem("selectIndex")) || "/manage"},
      {
        path: '/manage',
        name: 'manage',
        component: () => import('../views/Manage.vue')
      },
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../views/UserList.vue')
      },
      {
        path: '/shopList',
        name: 'shopList',
        component: () => import('../views/ShopList.vue')
      },
      {
        path: '/foodList',
        name: 'foodList',
        component: () => import('../views/FoodList.vue')
      },
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import('../views/OrderList.vue')
      },
      {
        path: '/adminList',
        name: 'adminList',
        component: () => import('../views/AdminList.vue')
      },
      {
        path: '/addShop',
        name: 'addShop',
        component: () => import('../views/AddShop.vue')
      },
      {
        path: '/addGood',
        name: 'addGood',
        component: () => import('../views/AddGood.vue')
      },
      {
        path: '/visitor',
        name: 'visitor',
        component: () => import('../views/Visitor.vue')
      },
      {
        path: '/vueEdit',
        name: 'vueEdit',
        component: () => import('../views/VueEdit.vue')
      },
      {
        path: '/adminSet',
        name: 'adminSet',
        component: () => import('../views/AdminSet.vue')
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../views/Explain.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
