<template>
  <div v-if="actionInfo">
    <div class="panel-header">
      <span>{{actionInfo.title}}</span>
    </div>
    <show-panel :actionInfo="actionInfo" :item="item" :fetchData="fetchData"></show-panel>
    <!-- <el-card>
      <div slot="header" class="clearfix">
        <ul class="clearfix">
          <li v-for="(operation,index) in actionInfo.operations" :key="index" class="pull-left" style="margin-right: 15px;">
            <edit v-if="operation.actionView === 'Edit'" :operation="operation" :handle="fetchData" :form="item"></edit>
          </li>
        </ul>
      </div>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="8" v-for="(column,index) in actionInfo.columns" :key="index" class="col-item">
          <div class="column">
            <div class="label" :style="column.labelStyle">
              <span>{{column.label}}</span>
            </div>
            <div class="value">
              <span>{{item && item[column.prop]}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card> -->
  </div>
</template>

<script>
import { reverseApi } from '@/libs/schemaTool'
import ShowPanel from '@/components/shared/ShowPanel'
// mixin
import mixinShow from '@/components/mixin/show'
export default {
  mixins: [mixinShow],
  methods: {
    fetchData () {
      let api = reverseApi(this.actionInfo.api, this.$route.params)
      this._fetchData(this.$api[api.method](api.path))
    }
  },
  components: {
    [ShowPanel.name]: ShowPanel
  }
}
</script>

<style lang="scss" scoped>
</style>
