import schema from '../schema'
export const getLinkToObj = (linkTo) => {
  if (linkTo) {
    let linkToArr = linkTo.split('.')
    let obj = schema.controllers
    linkToArr.forEach((key) => {
      obj = obj[key]
    })
    return obj
  }
  return null
}

let Route = require('route-parser')
export const reverseApi = (api, params) => {
  api = Object.assign({}, api)
  var route = new Route(api.path)
  api.path = route.reverse(params)
  return api
}
