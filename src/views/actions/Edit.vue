<template>
  <div v-if="actionInfo">
    <el-button v-if="operation" :type="operation.type" @click="editClick()">{{operation.label}}</el-button>
    <edit-panel :operation="operation" :formModel="formModel" :handler="handlerUpdate" :actionInfo="actionInfo" :opt="opt"></edit-panel>
  </div>
</template>

<script>
import { reverseApi, getLinkToObj } from '@/libs/schemaTool'
import EditPanel from '@/components/shared/EditPanel'
// mixin
import mixinEdit from '@/components/mixin/edit'
export default {
  mixins: [mixinEdit],
  props: ['form', 'operation', 'handle'],
  name: 'Edit',
  data () {
    return {
    }
  },
  methods: {
    fetchData () {
      let api = reverseApi(this.actionInfo.api, this.$route.params)
      this._fetchData(this.$api[api.method](api.path))
    },
    handlerUpdate (formModel) {
      this._handlerUpdate(formModel)
    },
    editClick () {
      console.log(this.operation)
      if (this.operation.isDialog) {
        this.opt.dialogFormVisible = true
      } else {
        let linkTo = getLinkToObj(this.operation.linkTo)
        console.log(linkTo, 2, linkTo.router.name, this.$route.params)
        this.$router.push({name: linkTo.router.name, params: this.$route.params})
      }
    }
  },
  components: {
    [EditPanel.name]: EditPanel
  }
}
</script>

<style lang="scss" scoped>
</style>
