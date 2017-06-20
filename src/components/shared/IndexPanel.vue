<template>
  <el-table :data="items" v-loading.body="loading" style="width: 100%">
    <el-table-column v-for="column in actionInfo.columns" :key="column.prop" :label="column.label" :width="column.width" :fixed="column.fixed">
      <template scope="scope">
        <div v-if="column.type==='Operation'">
          <ul>
            <li v-for="(operation, index) in column.operations" :key="index">
              <show v-if="operation.actionView === 'Show'" :operation="operation" :outItem="scope.row"></show>
              <edit v-if="operation.actionView === 'Edit'" :operation="operation" :outItem="scope.row" :handle="fetchData"></edit>
            </li>
          </ul>
        </div>
        <show v-else-if="column.operation && column.operation.actionView === 'Show'" :operation="column.operation" :outItem="scope.row"></show>
        <span v-else-if="column.type==='Boolean'">{{ getBooleanVal(scope.row, column)}}</span>
        <span v-else>{{scope.row[column['prop']]}}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getLinkToObj } from '@/libs/schemaTool'
import { Table, TableColumn } from 'element-ui'
import Show from '@/views/actions/Show'
import Edit from '@/views/actions/Edit'
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
    [TableColumn.name]: TableColumn,
    [Show.name]: Show,
    [Edit.name]: Edit
  }
}
</script>

<style lang="css">
</style>
