import Vue from 'vue'
import Vuex from 'vuex'
import vuexPer from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexPer()],
  state: {
    list: []
  },
  getters: {},
  mutations: {
    // 添加
    add(state, obj) {
      console.log(obj);
      state.list.push(obj)
    },
    // 编辑
    edit(state, obj) {
      console.log(obj);
      state.list[obj.index] = {
        name: obj.name,
        date1: obj.date1,
        date2: obj.date2,
        resource: obj.resource,
        date: obj.date
      }
      state.list = JSON.parse(JSON.stringify(state.list))
    },
    // 清空
    clear(state){
      state.list=[]
    }
  },
  actions: {},
  modules: {}
})