<template>
  <div>
    <div class="panel-header">
      <el-button>新增</el-button>
    </div>
    <el-card>
      <panel v-if="actionInfo" :items="items" :loading="loading" :fetchData="fetchData" :actionInfo="actionInfo"></panel>
    </el-card>
  </div>
</template>

<script>
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
    [Panel.name]: Panel
  }
}
</script>

<style lang="css">
</style>
