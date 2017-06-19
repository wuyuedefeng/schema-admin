<template>
  <div v-if="actionInfo">
    <div class="panel-header">
      <div v-for="(operation,index) in actionInfo.operations" :key="index">
        <new v-if="operation.actionView === 'New'" :operation="operation" :handle="fetchData"></new>
      </div>
    </div>
    <el-card>
      <index-panel :items="items" :loading="loading" :fetchData="fetchData" :actionInfo="actionInfo"></index-panel>
    </el-card>
  </div>
</template>

<script>
import New from './New'
import IndexPanel from '@/components/shared/IndexPanel'
// mixin
import mixinIndex from '@/components/mixin/index'
export default {
  mixins: [mixinIndex],
  methods: {
    fetchData () {
      this._fetchData(this.$api[this.actionInfo.api.method](this.actionInfo.api.path))
    }
  },
  components: {
    [New.name]: New,
    [IndexPanel.name]: IndexPanel
  }
}
</script>

<style lang="css">
</style>
