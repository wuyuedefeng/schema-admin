import * as types from '../mutation-types'
export default {
  state: {
    info: null
  },
  getters: {
    isLogin (state) {
      return !!state.info
    }
  },
  actions: {
    setUserInfo ({commit, dispatch, state}, info) {
      commit(types.SET_USER_INFO, info)
    },
    removeUserInfo ({commit, dispach}) {
      commit(types.REMOVE_USER_INFO)
    }
  },
  mutations: {
    [types.SET_USER_INFO] (state, info) {
      state.info = info
      localStorage.setItem('userInfo', JSON.stringify(info))
    },
    [types.REMOVE_USER_INFO] (state) {
      state.info = null
    }
  }
}
