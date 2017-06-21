<template>
  <el-form :inline="true" @submit.native.prevent="search" v-if="searchBar" id="_searchForm_">
    <el-form-item v-for="search in searchBar.searches" key="search.key" :label="search.label">
      <el-input v-if="search.control==='input'" v-model="q[search.prop]" :type="search.type" :autosize="search.autosize" :disabled="search.disabled" :placeholder="search.placeholder" :auto-complete="search.autoComplate" :minlength="search.minLength" :maxlength="search.maxLength" :autofocus="search.autoFocus"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">Search</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Form, FormItem, Input } from 'element-ui'
export default {
  name: 'SearchBar',
  props: ['q', 'searchBar'],
  data () {
    return {
    }
  },
  methods: {
    search () {
      this.$router.push({ query: { ...this.$route.query, ...this.q } })
    }
  },
  mounted () {
  },
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input
  }
}
</script>

<style lang="scss">
#_searchForm_ {
  .el-form-item {
    margin-top: 5px !important;
    margin-bottom: 5px !important;
  }
}
</style>
