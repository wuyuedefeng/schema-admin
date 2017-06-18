import Vue from 'vue'

import { Button, Card, Loading } from 'element-ui'
let elements = [Button, Card]
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service

import LeftNavMenu from './dashboard/LeftNavMenu'
elements.push(LeftNavMenu)

import TopNavMenu from './dashboard/TopNavMenu'
elements.push(TopNavMenu)

elements.forEach((element) => {
  Vue.component(element.name, element)
})
