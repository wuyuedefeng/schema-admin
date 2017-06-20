<template>
  <div v-if="actionInfo">
    <el-button v-if="operation" :type="operation.type" :size="operation.size" @click="showClick">{{operation.label || outItem && operation.labelProp && outItem[operation.labelProp] || ''}}</el-button>
    <show-panel :actionInfo="actionInfo" :operation="operation" :item="item" :fetchData="fetchData" :opt="opt"></show-panel>
  </div>
</template>

<script>
import { reverseApi, getLinkToObj } from '@/libs/schemaTool'
import ShowPanel from '@/components/shared/ShowPanel'
// mixin
import mixinShow from '@/components/mixin/show'
export default {
  name: 'Show',
  mixins: [mixinShow],
  props: ['operation', 'outItem'],
  computed: {
    calcParams () {
      let params = this.$route.params
      if (this.outItem) {
        Object.assign(params, this.outItem)
      }
      return params
    }
  },
  methods: {
    fetchData () {
      if (this.opt.dialogInfoVisible && this.operation && this.operation.isDialog) {
        let linkTo = getLinkToObj(this.operation.linkTo)
        let api = reverseApi(linkTo.api, this.outItem)
        this._fetchData(this.$api[api.method](api.path))
      } else if (!this.operation) {
        let api = reverseApi(this.actionInfo.api, this.calcParams)
        this._fetchData(this.$api[api.method](api.path))
      }
    },
    showClick () {
      if (this.operation && this.operation.isDialog) {
        this.opt.dialogInfoVisible = true
      } else {
        let linkTo = getLinkToObj(this.operation.linkTo)
        console.log(linkTo, 55)
        this.$router.push({name: linkTo.router.name, params: this.outItem})
      }
    }
  },
  components: {
    [ShowPanel.name]: ShowPanel
  }
}
</script>

<style lang="scss" scoped>
</style>
