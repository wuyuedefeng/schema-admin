<template>
  <div class="ui-new" v-if="actionInfo">
    <el-button :type="operation.type" @click="dialogFormVisible = true">{{operation.label}}</el-button>
    <el-dialog :size="actionInfo.dialog.size" :title="actionInfo.dialog.title" :close-on-click-modal="actionInfo.dialog.closeOnClickModal" v-model="dialogFormVisible">
      <s-form :form="actionInfo.form" :formModel="formModel" :handler="handlerUpdate"></s-form>
    </el-dialog>
  </div>
</template>

<script>
import { Dialog } from 'element-ui'
import { reverseApi } from '@/libs/schemaTool'
import SForm from '@/components/shared/SForm'
// mixin
import mixinEdit from '@/components/mixin/edit'
export default {
  mixins: [mixinEdit],
  props: ['operation', 'handle'],
  name: 'Edit',
  data () {
    return {
    }
  },
  methods: {
    fetchData () {
      console.log(111111222)
      let api = reverseApi(this.actionInfo.api, this.$route.params)
      console.log(api)
      this._fetchData(this.$api[api.method](api.path))
    },
    handlerUpdate (formModel) {
      this._handlerUpdate(formModel)
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
