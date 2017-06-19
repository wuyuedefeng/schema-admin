import { getControllerActionColumnOperationLinkTo, reverseApi } from '@/libs/schemaTool'
export default {
  data () {
    return {
      dialogFormVisible: false,
      actionInfo: null,
      formModel: {}
    }
  },
  methods: {
    _fetchData (promise) {
      promise.then((res) => {
        this.formModel = res.data[this.actionInfo.itemKey]
        console.log(this.formModel)
      })
    },
    _handlerUpdate (formModel) {
      console.log('submit edit form: ', formModel)
      let api = reverseApi(this.actionInfo.form.api, this.$route.params)
      this.$api[api.method](api.path, formModel).then((res) => {
        this.dialogFormVisible = false
        this.handler && this.handler()
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.actionInfo = getControllerActionColumnOperationLinkTo(this.operation)
    console.log(111111)
    this.fetchData()
  }
}
