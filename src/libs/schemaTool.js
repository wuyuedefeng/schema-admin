import schema from '../schema'
export const getControllerActionColumnOperationLinkTo = (operation) => {
  if (operation.linkTo) {
    let linkToArr = operation.linkTo.split('.')
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
  var route = new Route(api.path)
  api.path = route.reverse(params)
  return api
}
