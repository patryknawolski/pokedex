angular
  .module('app.layout')
  .directive('sidebarTab', sidebarTab)

function sidebarTab () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    templateUrl: 'app/layout/sidebar-tab.html',
    require: '^sidebar',
    link: link
  }

  function link (scope, elem, attr, sidebarCtrl) {
    scope.active = false
    sidebarCtrl.addTab(scope)
  }
}
