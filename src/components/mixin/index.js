export default {
  data () {
    return {
      items: [],
      loading: false,
      paginateMeta: {},
      actionInfo: null
    }
  },
  methods: {
    _beforeFetch () {
      this.items = []
      this.loading = true
    },
    _fetchData (promise) {
      this._beforeFetch()
      promise.then((res) => {
        this._afterFetch(res.data)
      }).catch(() => {
        this.loading = false
      })
    },
    _afterFetch (data) {
      this.loading = false
      this.paginateMeta = data.paginate_meta
      this.items = data[this.actionInfo.itemsKey]
    }
  },
  mounted () {
    this.actionInfo = this.$route.meta.actionInfo
    this.fetchData && this.fetchData()
  }
}
