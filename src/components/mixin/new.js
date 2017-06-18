import { getControllerActionColumnOperationLinkTo } from '@/libs/schemaTool'
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
  mounted () {
    this.actionInfo = getControllerActionColumnOperationLinkTo(this.operation)
  }
}
