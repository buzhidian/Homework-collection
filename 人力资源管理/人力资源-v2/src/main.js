import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementUI from "element-ui"
import http from "@/untils/httpRequest"
import "element-ui/lib/theme-chalk/index.css"
import TreeTable from "vue-table-with-tree-grid"
Vue.component("tree-table", TreeTable)
Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
