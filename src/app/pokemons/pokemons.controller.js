angular
  .module('app.pokemons')
  .controller('PokemonsController', PokemonsController)

/* ngInject */
function PokemonsController (dataFactory) {
  var vm = this
  vm.pokemons = []

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
