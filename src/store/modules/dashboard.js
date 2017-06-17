import * as types from '../mutation-types'
export default {
  state: {
    activeIndex: ''
  },
  actions: {
    setNavActionIndex ({commit, dispatch, state}, activeIndex) {
      commit(types.SET_NAV_ACTION_INDEX, activeIndex)
    }
  },
  mutations: {
    [types.SET_NAV_ACTION_INDEX] (state, activeIndex) {
      state.activeIndex = activeIndex
    }
  }
}
