const schema = {
  env: require(`./env/${process.env.NODE_ENV}`),
  views: require('./views')
}
schema.install = function (Vue, options) {
  if (options) {
    console.log(options)
  }
  Vue.prototype.schema = schema
  Vue.schema = schema
}
export default schema
