<template>
  <el-row :gutter="20" style="position: relative; z-index: 1;">
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
</template>

<script>
import { Row, Col } from 'element-ui'
export default {
  name: 'SInfo',
  props: ['actionInfo', 'item'],
  components: {
    [Row.name]: Row,
    [Col.name]: Col
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
