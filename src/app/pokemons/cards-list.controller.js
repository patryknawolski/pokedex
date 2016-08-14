angular
  .module('app.pokemons')
  .controller('CardsListController', CardsListController)

/* ngInject */
function CardsListController (dataFactory) {
  var vm = this
  vm.pokemons = []
  vm.filter = []

  activate()

  function activate () {
    return getPokemons()
  }

  function getPokemons () {
    return dataFactory.getPokemons()
      .then(function (data) {
        vm.pokemons = data
        return vm.pokemons
      })
  }
}
