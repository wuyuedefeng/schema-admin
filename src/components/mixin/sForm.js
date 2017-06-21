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
      this.$refs[form].resetFields()
    },
    submitForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.handler && this.handler(this.formModel)
        }
      })
    }
  }
}
