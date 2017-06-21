<template>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="q.page" :page-sizes="[10, 20, 30, 40]" :page-size="q.per_page" :layout="layout" :total="paginateMeta.total_count"></el-pagination>
</template>

<script>
import { Pagination } from 'element-ui'
export default {
  name: 'SPagination',
  props: {
    q: {
      type: Object
    },
    paginateMeta: {
      type: Object
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  methods: {
    handleSizeChange (val) {
      this.q.per_page = val
      this.handleRouter()
    },
    handleCurrentPageChange (val) {
      this.q.page = val
      this.handleRouter()
    },
    handleRouter () {
      this.$router.push({ query: { ...this.$route.query, ...this.q } })
    }
  },
  components: {
    [Pagination.name]: Pagination
  }
}
</script>

<style lang="css">
</style>
