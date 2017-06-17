import Vue from 'vue'
import { Menu, Submenu, MenuItem } from 'element-ui'
let elements = [Menu, Submenu, MenuItem]
elements.forEach((element) => {
  Vue.component(element.name, element)
})
