<template>
  <el-form :model="formModel" ref="formRef" :labelWidth="form.labelWidth">
    <el-form-item v-for="(column,index) in form.columns" :key="index" :label="column.label" :prop="column.prop">
      <el-input v-if="column.control==='input'" v-model="formModel[column.prop]" :placeholder="column.placeholder"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm('formRef')" v-if="isNew">Reset</el-button>
      <el-button type="primary" :disabled="fetching" @click="submitForm('formRef')">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Form, FormItem, Input } from 'element-ui'
// mixin
import mixinSForm from '@/components/mixin/sForm'
export default {
  mixins: [mixinSForm],
  props: ['form', 'formModel'],
  name: 'SForm',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input
  }
}
</script>

<style lang="css">
</style>
