<template>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="q[globalConfig.keys['currentPage']]" :page-sizes="globalConfig.pageSizes" :page-size="q[globalConfig.keys['pageSize']]" :layout="globalConfig.layout" :total="paginateMeta[globalConfig.keys['totalInPaginateMeta']]"></el-pagination>
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
    }
  },
  computed: {
    globalConfig () {
      return this.schema.globlalConfig.pagination
    }
  },
  methods: {
    handleSizeChange (val) {
      this.q[this.globalConfig.keys['pageSize']] = val
      this.handleRouter()
    },
    handleCurrentChange (val) {
      this.q[this.globalConfig.keys['currentPage']] = val
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
