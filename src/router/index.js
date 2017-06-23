import Vue from 'vue'
import Router from 'vue-router'
import schema from '../schema'
import store from '@/store'

Vue.use(Router)
let controllers = schema.controllers
let actionRoutes = []
Object.keys(controllers).forEach((key) => {
  let controller = controllers[key]
  Object.keys(controller).forEach((key) => {
    let router = controller[key]['router']
    if (router) {
      router.meta.controllerInfo = controller
      router.meta.actionInfo = controller[key]
      router.component = (resolve) => { require([`@/views/actions/${router.meta.actionView}`], resolve) }
      actionRoutes.push(router)
    }
  })
})

var router = new Router({
  routes: [
    { path: '/', name: 'Home', meta: { auth: true }, component: (resolve) => { require(['@/views/Home'], resolve) } },
    { path: '*', component: (resolve) => { require(['@/views/NotFound'], resolve) } }
  ].concat(actionRoutes)
})

// When handling the refresh, vuex is cleared but the admin is already logged in
if (window.localStorage.userInfo) {
  store.dispatch('setUserInfo', JSON.parse(window.localStorage.userInfo))
}
// Log in the middle, the page needs to log in, without the login situation directly jump login
router.beforeEach((to, from, next) => {
  console.log(0, to)
  if (to.matched.some(record => record.meta.auth)) {
    console.log(111)
    if (store.state.user.info) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    if (to.name === 'Login' && store.state.user.info) {
      next(false)
    } else {
      next()
    }
  }
})

export default router
