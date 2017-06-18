<template>
  <div v-if="actionInfo">
    <div class="panel-header">
      <div v-for="(operation,index) in actionInfo.operations" :key="index">
        <new v-if="operation.actionView === 'New'" :operation="operation"></new>
      </div>
    </div>
    <el-card>
      <panel :items="items" :loading="loading" :fetchData="fetchData" :actionInfo="actionInfo"></panel>
    </el-card>
  </div>
</template>

<script>
import New from '@/components/ui/New'
import Panel from '@/components/ui/Panel'
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
    [Panel.name]: Panel
  }
}
</script>

<style lang="css">
</style>
