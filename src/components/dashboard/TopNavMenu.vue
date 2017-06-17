<template>
  <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="TopNavMenu clearfix">
    <div class="fl">
      <el-menu-item index="1">schema admin</el-menu-item>
    </div>
    <div class="fr">
      <el-menu-item index="2">个人中心</el-menu-item>
    </div>

  </el-menu>
</template>

<script>
export default {
  name: 'TopNavMenu',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
.TopNavMenu {
  position: relative;
  z-index: 1;
}
</style>
