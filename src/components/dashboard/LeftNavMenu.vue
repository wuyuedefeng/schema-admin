<template>
  <el-menu default-active="2" @open="handleOpen" @close="handleClose" theme="light" :style="schema.views.dashboard.leftNavMenu.style">
    <div v-for="(item,index) in schema.views.dashboard.leftNavMenu.menus" :key="index">
    <el-submenu v-if="item.type==='submenu'" :index="item.index">
     <template slot="title"><i v-if="item.icon" :class="item.icon"></i>{{item.title}}</template>
     <div v-for="(item,index) in item.items" :key="index">
       <el-menu-item-group v-if="item.type==='menu-item-group'" :title="item.title">
         <el-menu-item v-for="(item,index) in item.items" :key="index" :index="item.index">{{item.title}}</el-menu-item>
       </el-menu-item-group>
       <el-menu-item v-else-if="item.type==='menu-item'" :index="item.index">{{item.title}}</el-menu-item>
     </div>
    </el-submenu>
    <el-menu-item v-if="item.type==='menu-item'" :index="item.index" @click="goRoute(item.route)">{{item.title}}</el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: 'LeftNavMenu',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    goRoute (path) {
      this.$router.push({path: path})
    }
  }
}
</script>

<style lang="scss">
</style>
