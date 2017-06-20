import { getLinkToObj } from '@/libs/schemaTool'
export default {
  data () {
    return {
      dialogFormVisible: false,
      item: null,
      actionInfo: null
    }
  },
  methods: {
    _fetchData (promise) {
      promise.then((res) => {
        this.item = res.data[this.actionInfo.itemKey]
      })
    }
  },
  mounted () {
    if (this.operation) {
      this.actionInfo = getLinkToObj(this.operation.linkTo)
    } else {
      this.actionInfo = this.$route.meta.actionInfo
    }
    this.fetchData && this.fetchData()
  }
}
