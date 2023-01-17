import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../views/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Login
  },
  {
    path: "/about",
    name: "about",
    component: () => import( "../views/Index.vue"),
    children: [
      {
        path: "/userIndex",
        name: "userIndex",
        component: () => import( "../views/user/userIndex.vue")
      },
      {
        path: "/my",
        name: "my",
        component: () => import( "../views/user/my.vue")
      },
      {
        path: "/StaffIn",
        name: "StaffIn",
        component: () => import( "../views/Staff/StaffIn.vue")
      },
      {
        path: "/check",
        name: "check",
        component: () => import( "../views/Staff/check.vue")
      },
      {
        path: "/uploading",
        name: "uploading",
        component: () => import( "../views/Staff/uploading.vue")
      },
      {
        path: "/companyIn",
        name: "companyIn",
        component: () => import( "../views/company/companyIn.vue")
      },
      {
        path: "/permission",
        name: "permission",
        component: () => import( "../views/permission/permission.vue")
      },
      {
        path: "/departMent",
        name: "departMent",
        component: () => import( "../views/departMent/departMent.vue")
      },
      {
        path: "/securitys",
        name: "securitys",
        component: () => import( "../views/departMent/securitys.vue")
      },
      {
        path: "/monthStatement",
        name: "monthStatement",
        component: () => import( "../views/departMent/monthStatement.vue")
      },
      {
        path: "/secdetail",
        name: "secdetail",
        component: () => import( "../views/departMent/secdetail.vue")
      },
      {
        path: "/instance",
        name: "instance",
        component: () => import( "../views/instance/instance.vue")
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import( "../views/instance/setting.vue")
      },
      {
        path: "/appsee",
        name: "appsee",
        component: () => import( "../views/instance/appsee.vue")
      },
      {
        path: "/attendances",
        name: "attendances",
        component: () => import( "../views/attenDances/attendances.vue")
      },
      {
        path: "/attenimport",
        name: "attenimport",
        component: () => import( "../views/attenDances/attenimport.vue")
      },
      {
        path: "/attenhistory",
        name: "attenhistory",
        component: () => import( "../views/attenDances/attenhistory.vue")
      },
      {
        path: "/attport",
        name: "attport",
        component: () => import( "../views/attenDances/attport.vue")
      },
      {
        path: "/salarys",
        name: "salarys",
        component: () => import( "../views/salarys/salarys.vue")
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import( "../views/salarys/setting.vue")
      },
      {
        path: "/statement",
        name: "statement",
        component: () => import( "../views/salarys/statement.vue")
      },
      {
        path: "/salaryDetails",
        name: "salaryDetails",
        component: () => import( "../views/salarys/salaryDetails.vue")
      },
      {
        path: "/organizational",
        name: "organizational",
        component: () => import( "../views/organizational/organizational.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
