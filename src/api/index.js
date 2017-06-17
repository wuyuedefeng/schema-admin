import axios from 'axios'
var store = null
const instance = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 150000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  if (error.response) {
    if (error.response.status === 403) {
      console.console.log('token overdue!', error)
    } else if (error.response.status === 500) {
      console.log('server error', error)
    } else {
      console.log(error)
    }
  } else {
    console.log(error)
  }
  return Promise.reject(error)
})
instance.install = function (Vue, options) {
  if (options.store) {
    store = options.store
    console.log(store)
  }
  Vue.prototype.$api = instance
  Vue.$api = instance
}
export default instance
