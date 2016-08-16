angular
  .module('app.layout')
  .factory('overlayFactory', overlayFactory)

function overlayFactory () {
  var isVisible = false

  var service = {
    state: {
      isVisible: isVisible
    },
    show: show,
    hide: hide
  }

  return service

  function show () {
    service.state.isVisible = true
  }

  function hide () {
    service.state.isVisible = false
  }
}
