export default {
  data () {
    return {
      items: [],
      loading: false,
      // 搜索
      q: {},
      // 分页
      paginateMeta: {
        total_count: 0
      },
      actionInfo: null
    }
  },
  watch: {
    '$route': function (newRouter) {
      this._fillQ()
    }
  },
  methods: {
    _fillQ () {
      this.q = Object.assign({page: 1, per_page: 10}, this.$route.query)
    },
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
    this._fillQ()
    this.actionInfo = this.$route.meta.actionInfo
    this.fetchData && this.fetchData()
  }
}
