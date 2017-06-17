// 导入vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 导入modules
import user from './modules/user'
import dashboard from './modules/dashboard'
var store = new Vuex.Store({
  state: {
  },
  actions: {
  },
  mutations: {
  },
  modules: {
    user,
    dashboard
  }
})
export default store
