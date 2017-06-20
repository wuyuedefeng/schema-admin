module.exports = {
  index: {
    router: {path: '/users', name: 'User', meta: { auth: true, actionView: 'Index', navIndex: 'User' }},
    api: {method: 'get', path: '/api/v1/users'},
    itemsKey: 'items', // res.data.items
    operations: [{label: '新增', type: 'default', actionView: 'New', linkTo: 'users.new', isDialog: true}],
    columns: [
      {prop: 'id', type: 'Number', label: '#', width: '80px', fixed: null, operation: {labelProp: 'id', type: 'text', size: "small", icon: 'info', actionView: 'Show', linkTo: 'users.show', isDialog: true }},
      {prop: 'username', type: 'String', label: 'username'},
      {prop: 'isActive', type: 'Boolean', label: 'isActive', trueValue: '是', falseValue: '否'},
      {type: 'Operation', label: '操作', width: "300", fixed: 'right', operations: [
        // {label: '详情', type: 'default', size: "small", icon: 'info', actionView: 'Show', linkTo: 'users.show', isDialog: false},
        {label: '编辑', type: 'default', icon: 'edit', size: "small", actionView: 'Edit', linkTo: 'users.edit', isDialog: false}
        // {label: '删除', type: 'danger', icon: 'delete', action: 'Delete'}
      ]}
    ]
  },
  new: {
    router: {path: '/users/new', name: 'UserNew', meta: {auth: true, actionView: 'New', navIndex: 'User'}},
    title: '新增用户',
    dialog: {size: 'large', closeOnClickModal: false, title: '新增用户', modal: true},
    form: {
      labelWidth: null, // 100px
      api: {method: 'post', path: '/api/v1/users'},
      columns: [
        {prop: 'username', label: '用户名', control: 'input', default: '', type: 'text', placeholder: '请输入用户名', disabled: false, autoComplate: 'off', minLength: 0, maxLength: 30, autoFocus: true},
        {prop: 'password', label: '密码', control: 'input', type: 'password'},
        {prop: 'phone', label: '手机号', control: 'input', default: '', placeholder: '请输入手机号'},
        {prop: 'gender', label: '性别', control: 'select', default: '', placeholder: '选择性别', multiple: false, options: [{label: '男', value: 0}, {label: '女', value: 1}], clearable: false},
        {prop: 'age', label: '年龄', control: 'inputNumber', default: 20, placeholder: '填写年龄', min: 1, max: 120, step: 1},
        {prop: 'active', label: '激活状态', control: 'switch', default: true, onText: '开', offText: '关', onColor: '#13ce66', offColor: '#ff4949'},
        // type: year/month/date/week/datetime/datetimerange/daterange [default: date]
        // format: '年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss' [default: 'yyyy-MM-dd']
        {prop: 'birthday', label: '生日', control: 'datePicker', type: 'date', format: 'yyyy-MM-dd', editable: false, default: '', placeholder: '选择生日', clearable: false, rangeSeparator: '-',
          pickerOptions: { disabledDate (time) { return time.getTime() > Date.now() } }
        },
        // autosize 只对 type="textarea"有效，可传入对象，如，{ minRows: 2, maxRows: 6 } or true, false
        {prop: 'desc', label: '描述', control: 'input', default: '', type: 'textarea', autosize: true, placeholder: '请输入描述', disabled: false},
      ]
    }
  },
  show: {
    title: '用户详情',
    router: {path: '/users/:id', name: 'UserShow', meta: {auth: true, actionView: 'Show', navIndex: 'User'}},
    dialog: {size: 'large', closeOnClickModal: true, title: '用户详情', modal: false},
    api: {method: 'get', path: '/api/v1/users/:id'},
    itemKey: 'user',
    operations: [{label: '编辑', type: 'default', actionView: 'Edit', linkTo: 'users.edit', isDialog: true}],
    columns: [
      {prop: 'id', label: 'id', labelStyle: {width: '100px'}},
      {prop: 'username', label: '用户名', labelStyle: {width: '100px'}},
      {prop: 'mobile', label: '电话', labelStyle: {width: '100px'}},
      {prop: 'email', label: '邮箱', labelStyle: {width: '100px'}}
    ]
  },
  edit: {
    router: {path: '/users/:id/edit', name: 'UserEdit', meta: {auth: true, actionView: 'Edit', navIndex: 'User'}},
    title: '编辑用户',
    dialog: {size: 'large', closeOnClickModal: false, title: '编辑用户', modal: false},
    api: {method: 'get', path: '/api/v1/users/:id'},
    itemKey: 'user', // res.data.items
    form: {
      labelWidth: null, // 100px
      api: {method: 'put', path: '/api/v1/users/:id'},
      columns: [
        {prop: 'username', label: '用户名', control: 'input', type: 'text', placeholder: '请输入用户名', disabled: false, autoComplate: 'off', minLength: 0, maxLength: 30, autoFocus: true},
        {prop: 'password', label: '密码', control: 'input', type: 'password'},
        {prop: 'phone', label: '手机号', control: 'input', placeholder: '请输入手机号'},
        {prop: 'gender', label: '性别', control: 'select', placeholder: '选择性别', multiple: false, options: [{label: '男', value: 0}, {label: '女', value: 1}], clearable: false},
        {prop: 'age', label: '年龄', control: 'inputNumber', placeholder: '填写年龄', min: 1, max: 120, step: 1},
        {prop: 'active', label: '激活状态', control: 'switch', onText: '开', offText: '关', onColor: '#13ce66', offColor: '#ff4949'},
        // type: year/month/date/week/datetime/datetimerange/daterange [default: date]
        // format: '年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss' [default: 'yyyy-MM-dd']
        {prop: 'birthday', label: '生日', control: 'datePicker', type: 'date', format: 'yyyy-MM-dd', editable: false, placeholder: '选择生日', clearable: false, rangeSeparator: '-',
          pickerOptions: { disabledDate (time) { return time.getTime() > Date.now() } }
        },
        // autosize 只对 type="textarea"有效，可传入对象，如，{ minRows: 2, maxRows: 6 } or true, false
        {prop: 'desc', label: '描述', control: 'input', type: 'textarea', autosize: true, placeholder: '请输入描述', disabled: false},
      ]
    }
  }
}
