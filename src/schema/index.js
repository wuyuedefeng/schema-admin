const schema = {
  env: require(`./env/${process.env.NODE_ENV}`),
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
