export default {
  data () {
    return {
      items: [],
      loading: false,
      // 搜索
      q: {},
      // 分页
      paginateMeta: {},
      actionInfo: null
    }
  },
  computed: {
    paginationConfig () {
      return this.schema.globlalConfig.pagination
    }
  },
  watch: {
    '$route': function (newRouter) {
      this._fillQ()
    }
  },
  methods: {
    _fillQ () {
      let paginationConfig = this.paginationConfig
      let currentPageKey = paginationConfig['keys']['currentPage']
      let pageSizeKey = paginationConfig['keys']['pageSize']
      let defaultObj = { [currentPageKey]: 1, [pageSizeKey]: paginationConfig.defaultPageSize }
      let newQ = Object.assign(defaultObj, this.$route.query)
      if (newQ[currentPageKey]) {
        newQ[currentPageKey] = parseInt(newQ[currentPageKey])
      }
      if (newQ[pageSizeKey]) {
        newQ[pageSizeKey] = parseInt(newQ[pageSizeKey])
      }
      this.q = newQ
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
      let paginationConfig = this.paginationConfig
      this.paginateMeta = data[paginationConfig.keys.paginateMetaKey]
      this.items = data[this.actionInfo.itemsKey]
    }
  },
  mounted () {
    this._fillQ()
    this.$set(this.paginateMeta, this.paginationConfig.keys.totalInPaginateMeta, 0)
    this.actionInfo = this.$route.meta.actionInfo
    this.fetchData && this.fetchData()
  }
}
