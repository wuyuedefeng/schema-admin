import Vue from 'vue'
import Router from 'vue-router'
import schema from '../schema'

Vue.use(Router)
let controllers = schema.views.controllers
let actionRoutes = []
Object.keys(controllers).forEach((key) => {
  let controller = controllers[key]
  Object.keys(controller).forEach((key) => {
    let router = controller[key]['router']
    router.component = (resolve) => { require([`@/views/actions/${router.meta.action}`], resolve) }
    actionRoutes.push(router)
  })
})

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: (resolve) => { require(['@/views/Home'], resolve) } },
    { path: '*', component: (resolve) => { require(['@/views/NotFound'], resolve) } }
  ].concat(actionRoutes)
})
