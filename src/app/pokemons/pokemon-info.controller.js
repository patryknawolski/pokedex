angular
  .module('app.pokemons')
  .controller('PokemonInfoController', PokemonInfoController)

/* @ngInject */
function PokemonInfoController (pokemonInfoFactory) {
  var vm = this
  vm.back = back
  vm.state = pokemonInfoFactory.state

  function back () {
    pokemonInfoFactory.hideInfo()
  }
}
