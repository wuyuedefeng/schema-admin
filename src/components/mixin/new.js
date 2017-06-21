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
        this.opt.dialogFormVisible = false
        api.cb && api.cb({ $store: this.$store, $route: this.$route, $router: this.$router })
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
      console.log(this.$route)
      this.actionInfo = this.$route.meta.actionInfo
    }
  }
}
