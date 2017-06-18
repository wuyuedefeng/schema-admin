export default {
  data () {
    return {
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
    this.actionInfo = this.$route.meta.actionInfo
    console.log(this.actionInfo)
    this.fetchData && this.fetchData()
  }
}
