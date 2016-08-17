angular
  .module('app.layout')
  .factory('bodyFactory', bodyFactory)

function bodyFactory () {
  var service = {
    state: {
      scroll: true
    },
    allowScroll: allowScroll,
    disallowScroll: disallowScroll
  }

  return service

  function allowScroll () {
    service.state.scroll = true
  }

  function disallowScroll () {
    service.state.scroll = false
  }
}
