<template>
  <div class="ui-new" v-if="actionInfo">
    <el-button :type="operation.type" @click="dialogFormVisible = true">{{operation.label}}</el-button>
    <el-dialog :size="actionInfo.dialog.size" :title="actionInfo.dialog.title" :close-on-click-modal="actionInfo.dialog.closeOnClickModal" v-model="dialogFormVisible">
      <s-form :form="actionInfo.form" :formModel="formModel"></s-form>
    </el-dialog>
  </div>
</template>

<script>
import { Dialog } from 'element-ui'
import SForm from '@/components/shared/SForm'
// mixin
import mixinNew from '@/components/mixin/new'
export default {
  mixins: [mixinNew],
  props: ['operation'],
  name: 'New',
  data () {
    return {
    }
  },
  components: {
    [Dialog.name]: Dialog,
    [SForm.name]: SForm
  }
}
</script>

<style lang="scss" scoped>
.ui-new {

}
</style>
