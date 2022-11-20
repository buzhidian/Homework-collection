import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    center:""
  },
  getters: {
  },
  mutations: {
    set(state,val){
      state.center = val
    }
  },
  actions: {
  },
  modules: {
  }
})
