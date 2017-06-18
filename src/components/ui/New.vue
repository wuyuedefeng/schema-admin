<template>
  <div class="ui-new" v-if="actionInfo">
    <el-button :type="operation.type" @click="dialogFormVisible = true">{{operation.label}}</el-button>
    <el-dialog :size="actionInfo.dialog.size" :title="actionInfo.dialog.title" :close-on-click-modal="actionInfo.dialog.closeOnClickModal" v-model="dialogFormVisible">
      abc
    </el-dialog>
  </div>
</template>

<script>
import { Dialog } from 'element-ui'
import { getControllerActionColumnOperationLinkTo } from '@/libs/schemaTool'
export default {
  props: ['operation'],
  name: 'New',
  data () {
    return {
      dialogFormVisible: false,
      actionInfo: null
    }
  },
  mounted () {
    this.actionInfo = getControllerActionColumnOperationLinkTo(this.operation)
  },
  components: {
    [Dialog.name]: Dialog
  }
}
</script>

<style lang="scss" scoped>
.ui-new {

}
</style>
