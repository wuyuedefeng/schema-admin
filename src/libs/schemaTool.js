import schema from '../schema'
export const getControllerActionColumnOperationLinkTo = function (operation) {
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
