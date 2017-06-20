<template>
  <div>
    <el-dialog v-if="operation && operation.isDialog" :size="actionInfo.dialog.size" :title="actionInfo.dialog.title" :close-on-click-modal="actionInfo.dialog.closeOnClickModal" v-model="opt.dialogFormVisible" :modal="actionInfo.dialog.modal" :modal-append-to-body="false">
      <s-form :form="actionInfo.form" :formModel="formModel" :handler="handler"></s-form>
    </el-dialog>
    <div v-else-if="!operation">
      <div class="panel-header">
        <span>{{actionInfo.title}}</span>
      </div>
      <el-card>
        <s-form :form="actionInfo.form" :formModel="formModel" :handler="handler"></s-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { Dialog, Card } from 'element-ui'
import SForm from '@/components/shared/SForm'
export default {
  name: 'EditPanel',
  props: ['operation', 'actionInfo', 'formModel', 'opt', 'handler'],
  data () {
    return {
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
