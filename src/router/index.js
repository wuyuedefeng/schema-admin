import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: (resolve) => { require(['@/views/Home'], resolve) } },
    { path: '*', component: (resolve) => { require(['@/views/NotFound'], resolve) } }
  ]
})
