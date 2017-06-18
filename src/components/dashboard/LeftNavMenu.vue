<template>
  <div :class="{closeMenu: isCloseMenu}" class="LeftNavMenu">
    <div class="toolbar">
      <i :class="{'el-icon-caret-left': !isCloseMenu, 'el-icon-caret-right': isCloseMenu}" class="fr" @click="toggleMenu"></i>
    </div>
    <el-menu v-if="!isCloseMenu" class="menu" :default-active="activeIndex" @open="handleOpen" @close="handleClose" @select="handleSelect" theme="dark" :style="schema.views.dashboard.leftNavMenu.style">
      <div v-for="(item,index) in schema.views.dashboard.leftNavMenu.menus" :key="index">
      <el-submenu v-if="item.type==='submenu'" :index="item.index">
       <template slot="title"><i v-if="item.icon" :class="item.icon"></i>{{item.title}}</template>
       <div v-for="(item,index) in item.items" :key="index">
         <el-menu-item-group v-if="item.type==='menu-item-group'" :title="item.title">
           <el-menu-item v-for="(item,index) in item.items" :key="index" :index="item.index" @click="goRoute(item.route)">{{item.title}}</el-menu-item>
         </el-menu-item-group>
         <el-menu-item v-else-if="item.type==='menu-item'" :index="item.index" @click="goRoute(item.route)">{{item.title}}</el-menu-item>
       </div>
      </el-submenu>
      <el-menu-item v-if="item.type==='menu-item'" :index="item.index" @click="goRoute(item.route)">{{item.title}}</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui'
export default {
  name: 'LeftNavMenu',
  data () {
    return {
      isCloseMenu: false
    }
  },
  computed: {
    ...mapState({
      activeIndex: state => state.dashboard.activeIndex
    })
  },
  methods: {
    toggleMenu () {
      this.isCloseMenu = !this.isCloseMenu
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.$store.dispatch('setNavActionIndex', key)
    },
    goRoute (route) {
      route && this.$router.push(route)
    }
  },
  components: {
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItemGroup.name]: MenuItemGroup,
    [MenuItem.name]: MenuItem
  }
}
</script>

<style lang="scss">
.LeftNavMenu {
  background: #324157;
  .closeMenu {
    width: 20px;
    overflow: hidden;
    background: #fff;
  }
  .toolbar {
    height: 22px;
    padding: 2px 4px;
    border-left: 2px solid #324157;
    border-right: 2px solid #324157;
    background: #eef1f6;
    i {
      cursor: pointer;

      &:hover {
        color: #ccc;
      }
    }
  }
}
</style>
