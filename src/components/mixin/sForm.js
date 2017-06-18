export default {
  data () {
    return {
      fetching: false
    }
  },
  computed: {
    isNew () {
      return !this.formModel.id
    }
  },
  methods: {
    resetForm (form) {
      console.log(this.formModel)
      this.$refs[form].resetFields()
    }
  }
}
