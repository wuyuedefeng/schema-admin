expport default {
  data () {
    return {
      item: null
    }
  },
  methods: {
    _fetchData (promise) {
      promise.then((res) => {
        this.item = res.data.item
      })
    }
  },
  mounted () {
    this.actionInfo = this.$route.meta.actionInfo
    this.fetchData && this.fetchData()
  }
}
