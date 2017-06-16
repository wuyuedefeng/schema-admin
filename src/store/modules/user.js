import * as types from '../mutation-types'
export default {
  state: {
    info: null
  },
  getters: {
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
    },
    [types.REMOVE_USER_INFO] (state) {
      state.info = null
    }
  }
}
