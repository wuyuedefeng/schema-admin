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
        this._setFormModel()
      }
    }
  },
  methods: {
    _setFormModel () {
      let formModel = {}
      let formColumns = this.actionInfo.form.columns
      formColumns.forEach((column) => {
        this._setColumnModel_(column, formModel)
      })
      this.formModel = formModel
    },
    _setColumnModel_ (column, model) {
      if (column.control === 'object') {
        model[column.prop] = {}
        let oModel = model[column.prop]
        column.columns.forEach((column) => {
          this._setColumnModel_(column, oModel)
        })
      } else {
        model[column.prop] = column.default
      }
    },
    _handlerCreate (formModel) {
      console.log('submit form: ', formModel)
      let api = reverseApi(this.actionInfo.form.api, this.$route.params)
      this.$api[api.method](api.path, formModel).then((res) => {
        this.opt.dialogFormVisible = false
        api.cb && api.cb({ $store: this.$store, $route: this.$route, $router: this.$router, res: res })
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
      this._setFormModel()
    }
  }
}
