angular
  .module('app.layout')
  .directive('overlay', overlay)

function overlay () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/layout/overlay.html',
    controller: 'OverlayController',
    controllerAs: 'vm'
  }
}
