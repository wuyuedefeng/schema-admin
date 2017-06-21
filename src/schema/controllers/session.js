module.exports = {
  title: '登录',
  router: {path: '/login', name: 'Login', meta: { actionView: 'New' }},
  form: {
    columns: [
      {prop: 'username', label: '用户名', control: 'input', default: '', type: 'text', placeholder: '请输入用户名', disabled: false, autoComplate: 'off', minLength: 0, maxLength: 30, autoFocus: true},
      {prop: 'password', label: '密码', control: 'input', type: 'password'}
    ]
  }
}
