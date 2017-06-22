_**/src/controller/session.js**_

---

action: login



`login: {`

`    style: {width: '600px', margin: '0 auto'},`

`    title: '登录',`

`    titleStyle: {display: 'block', textAlign: 'center'},`

`    router: {path: '/login', name: 'Login', meta: { actionView: 'New' }},`

`    form: {`

`      api: {method: 'post', path: '/api/v1/login',  cb: (opt) => {`

`        console.log(3333333)`

`      }},`

`      columns: [`

`        { prop: 'user', control: 'object', columns: [`

`          {prop: 'username', label: '用户名', control: 'input', default: '', type: 'text', placeholder: '请输入用户名', disabled: false, autoComplate: 'off', minLength: 0, maxLength: 30, autoFocus: true},`

`          {prop: 'password', label: '密码', control: 'input', type: 'password', placeholder: '请输入密码'}`

`        ]}`

`      ],`

`      resetBtn: {hide: true},`

`      submitBtn: {label: '登录'}`

`    }`

`  }`

