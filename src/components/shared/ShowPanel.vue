<template>
  <div>
    <el-dialog v-if="operation && operation.isDialog" :size="actionInfo.dialog.size" :title="actionInfo.dialog.title" :close-on-click-modal="actionInfo.dialog.closeOnClickModal" v-model="opt.dialogInfoVisible">
      <s-info :actionInfo="actionInfo" :item="item"></s-info>
    </el-dialog>
    <div v-else-if="!operation">
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
          <s-info :actionInfo="actionInfo" :item="item"></s-info>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { Dialog, Card } from 'element-ui'
import Edit from '@/views/actions/Edit'
import SInfo from './SInfo'
export default {
  name: 'ShowPanel',
  props: ['actionInfo', 'operation', 'item', 'fetchData', 'opt'],
  data () {
    return {
    }
  },
  components: {
    [Dialog.name]: Dialog,
    [Card.name]: Card,
    [SInfo.name]: SInfo,
    [Edit.name]: Edit
  }
}
</script>

<style lang="scss" scoped>
</style>
