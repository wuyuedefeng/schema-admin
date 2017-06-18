<template>
  <el-form :model="formModel" ref="formRef" :labelWidth="form.labelWidth">
    <el-form-item v-for="(column,index) in form.columns" :key="index" :label="column.label" :prop="column.prop">
      <!-- input -->
      <el-input v-if="column.control==='input'" v-model="formModel[column.prop]" :disabled="column.disabled" :placeholder="column.placeholder"></el-input>
      <!-- input number -->
      <el-input-number v-else-if="column.control==='inputNumber'" v-model="formModel[column.prop]" :disabled="column.disabled" :placeholder="column.placeholder" :min="column.min" :max="column.max" :step="column.step || 1"></el-input-number>
      <!-- select -->
      <el-select v-else-if="column.control==='select'" v-model="formModel[column.prop]" :disabled="column.disabled" :placeholder="column.placeholder" :multiple="column.multiple" :clearable="column.clearable">
        <el-option v-for="option in column.options" :key="option.value" :label="option.label" :value="option.value"></el-option>
      </el-select>
      <!-- switch -->
      <el-switch v-else-if="column.control==='switch'" v-model="formModel[column.prop]" :disabled="column.disabled" :on-text="column.onText" :off-text="column.offText" :on-color="column.onColor" :off-color="column.offColor"></el-switch>
      <!-- date -->
      <el-date-picker  v-else-if="column.control==='datePicker'" v-model="formModel[column.prop]" :disabled="column.disabled" :placeholder="column.placeholder" :type="column.type" :format="column.format" :editable="column.editable" :clearable="column.clearable" :picker-options="column.pickerOptions" :range-separator="column.rangeSeparator">
    </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm('formRef')" v-if="isNew">Reset</el-button>
      <el-button type="primary" :disabled="fetching" @click="submitForm('formRef')">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Form, FormItem, Input, InputNumber, Select, Option, Switch, DatePicker } from 'element-ui'
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
    [Input.name]: Input,
    [InputNumber.name]: InputNumber,
    [Select.name]: Select,
    [Option.name]: Option,
    [Switch.name]: Switch,
    [DatePicker.name]: DatePicker
  }
}
</script>

<style lang="css">
</style>
