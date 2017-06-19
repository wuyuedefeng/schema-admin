<template>
  <div v-if="actionInfo">
    <el-button v-if="operation" :type="operation.type" @click="newClick()">{{operation.label}}</el-button>
    <new-panel :operation="operation" :formModel="formModel" :handler="handlerCreate" :actionInfo="actionInfo" :dialogFormVisible="dialogFormVisible"></new-panel>
  </div>
</template>

<script>
import { getLinkToObj } from '@/libs/schemaTool'
import NewPanel from '@/components/shared/NewPanel'
// mixin
import mixinNew from '@/components/mixin/new'
export default {
  mixins: [mixinNew],
  props: ['operation', 'handle'],
  name: 'New',
  data () {
    return {
    }
  },
  methods: {
    handlerCreate (formModel) {
      this._handlerCreate(formModel)
    },
    newClick () {
      if (this.operation.isDialog) {
        this.dialogFormVisible = true
      } else {
        let linkTo = getLinkToObj(this.operation.linkTo)
        this.$router.push({name: linkTo.router.name, params: this.$route.params})
      }
    }
  },
  components: {
    [NewPanel.name]: NewPanel
  }
}
</script>

<style lang="scss" scoped>
</style>
