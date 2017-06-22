<template>
  <el-form :model="formModel" ref="formRef" :labelWidth="form.labelWidth">
    <s-form-item :form="form" :formModel="formModel"></s-form-item>
    <el-form-item>
      <el-button @click="resetForm('formRef')" v-if="isNew && !(form.resetBtn && form.resetBtn.hide)">Reset</el-button>
      <el-button type="primary" :disabled="fetching" @click="submitForm('formRef')">{{form.submitBtn && form.submitBtn.label || 'Submit'}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Form, FormItem } from 'element-ui'
import SFormItem from './SFormItem'
// mixin
import mixinSForm from '@/components/mixin/sForm'
export default {
  mixins: [mixinSForm],
  name: 'SForm',
  props: ['form', 'formModel', 'handler'],
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [SFormItem.name]: SFormItem
  }
}
</script>

<style lang="css">
</style>
