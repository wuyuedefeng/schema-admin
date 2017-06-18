const controllers = {
  users: {
    index: {
      router: {path: '/users', name: 'User', meta: { auth: true, actionView: 'Index' }},
      api: '/api/v1/users',
      itemsKey: 'items', // res.data.items
      columns: [
        {prop: 'id', type: 'Number', label: '#', width: '80px', fixed: 'left'},
        {prop: 'username', type: 'String', label: 'username'},
        {prop: 'isActive', type: 'Boolean', label: 'isActive', trueValue: '是', falseValue: '否'},
        {type: 'Operation', label: '操作', width: "300", fixed: 'right', operations: [
          {label: '详情', type: 'default', icon: 'info', linkTo: 'users.show'},
          {label: '编辑', type: 'default', icon: 'edit', action: 'Edit'},
          {label: '删除', type: 'danger', icon: 'delete', action: 'Delete'}
        ]}
      ]
    },
    show: {
      router: {path: '/users/:id', name: 'UserEdit', meta: {auth: true, actionView: 'Show'}},
      api: '/api/v1/users/:id',
      itemKey: 'item'
    }
  }
}
module.exports = controllers
