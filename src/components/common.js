import Vue from 'vue'

import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
let elements = [Menu, Submenu, MenuItem, MenuItemGroup]
elements.forEach((element) => {
  Vue.component(element.name, element)
})

import LeftNavMenu from './dashboard/LeftNavMenu'
Vue.component(LeftNavMenu.name, LeftNavMenu)

import TopNavMenu from './dashboard/TopNavMenu'
Vue.component(TopNavMenu.name, TopNavMenu)
