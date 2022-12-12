import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './untils/httpRequest'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Button,
  Select
} from 'element-ui'

Vue.use(ElementUI);
Vue.prototype.$http = http
// Vue.use(Button)
// Vue.use(Select)

// 引入富文本编辑器
import VueQuillEditor from "vue-quill-editor"
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor)

// 全局引入echarts
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')