<template v-if="actionInfo">
  <el-button v-if="operation" :type="operation.type" :size="operation.size" :icon="operation.icon" @click="deleteClick()">{{operation.label}}</el-button>
</template>

<script>
import { reverseApi, getLinkToObj } from '@/libs/schemaTool'
export default {
  name: 'Delete',
  props: ['operation', 'outItem', 'handler'],
  data () {
    return {
      actionInfo: null
    }
  },
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
    deleteClick () {
      let linkTo = getLinkToObj(this.operation.linkTo)
      let api = reverseApi(linkTo.api, this.calcParams)
      console.log(api, 3)
      this.$confirm('是否确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api[api.method](api.path).then(res => {
          this.handler && this.handler()
          this.$message({type: 'success', message: '删除成功!'})
        }).catch(() => {
          this.$message({type: 'info', message: '删除失败'})
        })
      })
    }
  },
  mounted () {
    this.actionInfo = getLinkToObj(this.operation.linkTo)
  }
}
</script>

<style lang="css">
</style>
