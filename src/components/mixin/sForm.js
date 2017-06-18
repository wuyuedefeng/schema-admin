export default {
  data () {
    return {
      isNew: true,
      fetching: false
    }
  },
  methods: {
    resetForm (form) {
      console.log(this.formModel)
      this.$refs[form].resetFields()
    }
  }
}
