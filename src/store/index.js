// 导入vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 导入modules
import user from './modules/user'
var store = new Vuex.Store({
  state: {
  },
  actions: {
  },
  mutations: {
  },
  modules: {
    user
  }
})
export default store
