import { getControllerActionColumnOperationLinkTo, reverseApi } from '@/libs/schemaTool'
export default {
  data () {
    return {
      dialogFormVisible: false,
      actionInfo: null,
      formModel: {}
    }
  },
  watch: {
    dialogFormVisible (newVal) {
      if (newVal) {
        let formModel = {}
        let formColumns = this.actionInfo.form.columns
        formColumns.forEach((column) => {
          formModel[column.prop] = column.default
        })
        this.formModel = formModel
      }
    }
  },
  methods: {
    _handlerCreate (formModel) {
      console.log('submit form: ', formModel)
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
  }
}
