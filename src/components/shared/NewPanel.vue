<template>
  <div>
    <el-dialog v-if="operation && operation.isDialog" :size="actionInfo.dialog.size" :title="actionInfo.dialog.title" :close-on-click-modal="actionInfo.dialog.closeOnClickModal" v-model="dialogVisible">
      <s-form :form="actionInfo.form" :formModel="formModel" :handler="handler"></s-form>
    </el-dialog>
    <el-card v-else-if="!operation">
      <div slot="header">
        <span>{{actionInfo.title}}</span>
      </div>
      <s-form :form="actionInfo.form" :formModel="formModel" :handler="handler"></s-form>
    </el-card>
  </div>
</template>

<script>
import { Dialog, Card } from 'element-ui'
import SForm from '@/components/shared/SForm'
export default {
  name: 'NewPanel',
  props: ['operation', 'actionInfo', 'formModel', 'dialogFormVisible', 'handler'],
  data () {
    return {
      dialogVisible: this.dialogFormVisible
    }
  },
  watch: {
    dialogFormVisible (newVal) {
      this.dialogVisible = newVal
    }
  },
  components: {
    [Dialog.name]: Dialog,
    [Card.name]: Card,
    [SForm.name]: SForm
  }
}
</script>

<style lang="css">
</style>
