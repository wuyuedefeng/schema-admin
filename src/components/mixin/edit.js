import { getLinkToObj, reverseApi } from '@/libs/schemaTool'
export default {
  data () {
    return {
      opt: {
        dialogFormVisible: false
      },
      actionInfo: null,
      formModel: {}
    }
  },
  watch: {
    'opt.dialogFormVisible': function (newVal) {
      if (newVal && this.operation && this.operation.isDialog) {
        this.fetchData()
      }
    }
  },
  methods: {
    _fetchData (promise) {
      promise.then((res) => {
        this.formModel = res.data[this.actionInfo.itemKey]
      })
    },
    _handlerUpdate (formModel) {
      console.log('submit edit form: ', formModel)
      let api = reverseApi(this.actionInfo.form.api, this.$route.params)
      this.$api[api.method](api.path, formModel).then((res) => {
        this.opt.dialogFormVisible = false
        this.handler && this.handler()
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    if (this.operation) {
      this.actionInfo = getLinkToObj(this.operation.linkTo)
    } else {
      this.actionInfo = this.$route.meta.actionInfo
      this.fetchData()
    }
  }
}
