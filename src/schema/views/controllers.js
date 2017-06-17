module.exports = {
  users: {
    index: {
      router: {path: '/users', name: 'User', meta: { requiresAuth: true, action: 'Index' }},
      api: '/api/users',
      itemsKey: 'items', // res.data.items
    }
  }
}
