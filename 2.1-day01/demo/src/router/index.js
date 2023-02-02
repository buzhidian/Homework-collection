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
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        path: '/userIndex',
        name: 'userIndex',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/index/userIndex.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/index/my.vue')
      },
      {
        path: '/tissueIn',
        name: 'tissueIn',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/tissueIn/tissueIn.vue'
          )
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
