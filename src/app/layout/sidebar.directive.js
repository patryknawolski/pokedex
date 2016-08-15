angular
  .module('app.layout')
  .directive('sidebar', sidebar)

function sidebar () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'app/layout/sidebar.html',
    controller: function () {
      var vm = this
      vm.isOpen = false
      vm.toggle = toggle

      function toggle () {
        vm.isOpen = !vm.isOpen
      }
    },
    controllerAs: 'vm'
  }
}
