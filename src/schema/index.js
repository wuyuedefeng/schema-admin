const schema = {
  env: require(`./env/${process.env.NODE_ENV}`),
  dashboard: require('./dashboard'),
  globlalConfig: require('./globalConfig'),
  controllers: require('./controllers')
}
schema.install = function (Vue, options) {
  if (options) {
    console.log(options)
  }
  Vue.prototype.schema = schema
  Vue.schema = schema
}
export default schema
