module.exports = {
  topNavMenu: {
    'pull-left': [
      { title: 'Shema Admin', index: 'top-1', type: 'menu-item' }
    ],
    'pull-right': [
      {
        title: '个人中心', index: 'top-2', type: 'submenu', items: [
          { title: '设置', index: 'top-2-1', type: 'menu-item' },
          { title: '退出', index: 'top-2-2', type: 'menu-item' }
        ]
      }
    ]
  },
  leftNavMenu: {
    style: {minWidth: '200px'},
    defaultActive: '',
    menus: [
      {title: '导航一', index: '1', type: 'submenu', icon: 'el-icon-menu', items: [
        {title: 'group1', type: 'menu-item-group', items: [
          {title: '1-1-1', index: '1-1-1', type: 'menu-item'},
          {title: '1-1-2', index: '1-1-2', type: 'menu-item'}
        ]},
        {title: 'group2', type: 'menu-item-group', items: [
          {title: '1-2-1', index: '1-2-1', type: 'menu-item'},
          {title: '1-2-2', index: '1-2-2', type: 'menu-item'}
        ]}
      ]},
      {title: '导航2', index: '2', type: 'submenu', icon: 'el-icon-message', items: [
        {title: '2-1', index: '2-1', type: 'menu-item'}
      ]}
    ]
  }
}
