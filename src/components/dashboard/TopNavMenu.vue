<template>
  <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="TopNavMenu clearfix">
    <div v-for="(items, key) in schema.views.dashboard.topNavMenu" :key=key>
      <div :class="key">
        <div v-for="item in items">
            <el-menu-item :index="item.index" v-if="item.type==='menu-item'" @click="goRoute(item.route)">{{item.title}}</el-menu-item>
            <el-submenu :index="item.index" v-if="item.type==='submenu'">
              <template slot="title">{{item.title}}</template>
              <el-menu-item v-for="(subItem, index) in item.items" :index="subItem.index" @click="goRoute(item.route)" :key="subItem.index">{{subItem.title}}</el-menu-item>
            </el-submenu>
        </div>
      </div>
    </div>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
import { Menu, Submenu, MenuItem } from 'element-ui'
export default {
  name: 'TopNavMenu',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      activeIndex: state => state.dashboard.activeIndex
    })
  },
  methods: {
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
    [MenuItem.name]: MenuItem
  }
}
</script>

<style lang="scss">
.TopNavMenu {
  position: relative;
  z-index: 1;
}
</style>
