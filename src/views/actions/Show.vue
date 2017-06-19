<template>
  <div v-if="actionInfo">
    <div class="panel-header">
      <span>{{actionInfo.title}}</span>
    </div>
    <el-card>
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
    </el-card>
  </div>
</template>

<script>
import { reverseApi } from '@/libs/schemaTool'
import { Row, Col } from 'element-ui'
import Edit from './Edit'
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
    [Row.name]: Row,
    [Col.name]: Col,
    [Edit.name]: Edit
  }
}
</script>

<style lang="scss" scoped>
.col-item {
  .column {
    display: flex;
    align-items: stretch;
    justify-content: center;
    box-sizing: content-box;
    margin: 10px 0;
    min-height: 40px;
    border: 2px solid #f2f2f2;
    .label {
      text-align: center;
      background: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .value {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
