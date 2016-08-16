angular
  .module('app.layout')
  .controller('OverlayController', OverlayController)

/* @ngInject */
function OverlayController (overlayFactory) {
  var vm = this
  vm.state = overlayFactory.state
}
