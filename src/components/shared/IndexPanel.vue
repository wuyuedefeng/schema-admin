<template>
  <el-table :data="items" v-loading.body="loading" style="width: 100%">
    <el-table-column v-for="column in actionInfo.columns" :key="column.prop" :label="column.label" :width="column.width" :fixed="column.fixed">
      <template scope="scope">
        <span v-if="column.type==='Boolean'">{{ getBooleanVal(scope.row, column)}}</span>
        <div v-else-if="column.type==='Operation'">
          <el-button v-for="(operation, index) in column.operations" :key="index" :icon="operation.icon" :type="operation.type" size="small" @click="handleOperation(column, operation, scope.row )">{{operation.label}}</el-button>
        </div>
        <span v-else>{{scope.row[column['prop']]}}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn } from 'element-ui'
import { getLinkToObj } from '@/libs/schemaTool'
export default {
  name: 'IndexPanel',
  props: ['items', 'loading', 'fetchData', 'actionInfo'],
  methods: {
    getBooleanVal (item, column) {
      let val = item[column['prop']]
      if (val) {
        return column['trueValue'] || 'true'
      }
      return column['falseValue'] || ''
    },
    handleOperation (column, operation, item) {
      let linkTo = getLinkToObj(operation.linkTo)
      this.$router.push({name: linkTo.router.name, params: item})
    }
  },
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  }
}
</script>

<style lang="css">
</style>
