import { createStore } from 'vuex'
import login from './modules/login'

export default createStore({
  state: {
  },
  getters: {
  },
  
  modules: {
    login:login,
  }
})
