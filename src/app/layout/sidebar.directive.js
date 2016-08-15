angular
  .module('app.layout')
  .directive('sidebar', sidebar)

function sidebar () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'app/layout/sidebar.html',
    controller: 'SidebarController',
    controllerAs: 'vm'
  }
}
