import schema from '../schema'
export const getControllerActionColumnOperationLinkTo = (operation) => {
  if (operation.linkTo) {
    let linkToArr = operation.linkTo.split('.')
    let obj = schema.views.controllers
    linkToArr.forEach((key) => {
      obj = obj[key]
    })
    return obj
  }
  return null
}

let Route = require('route-parser')
export const reverseApi = (api, params) => {
  var route = new Route(api)
  return route.reverse(params)
}
