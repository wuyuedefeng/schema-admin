<template>
  <div id="app">
    <div v-if="isLogin">
      <div class="page-header">
        <header-top></header-top>
        <header-menu></header-menu>
      </div>
      <div class="page-container">
        <breadcrumb></breadcrumb>
        <div class="page-content">
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
