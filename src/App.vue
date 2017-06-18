<template>
  <div id="app">
    <div v-if="isLogin">
      <div class="app-header">
        <TopNavMenu></TopNavMenu>
      </div>
      <div class="app-container">
        <LeftNavMenu></LeftNavMenu>
        <div class="page-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters(['isLogin'])
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.app-container {
  min-height: 660px;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;

  .page-container {
    box-sizing: content-box;
    flex: 1;
    background: #fff;
    padding: 5px 10px;
  }
}
</style>
