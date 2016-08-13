angular
  .module('app.pokemons')
  .controller('SidebarController', SidebarController)

function SidebarController (dataFactory) {
  var vm = this
  vm.types = []

  activate()

  function activate () {
    return getTypes()
  }

  function getTypes () {
    return dataFactory.getTypes()
      .then(function (data) {
        vm.types = data
        return vm.types
      })
  }
}
