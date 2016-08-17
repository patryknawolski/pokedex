angular
  .module('app.pokemons')
  .controller('PokemonInfoController', PokemonInfoController)

/* @ngInject */
function PokemonInfoController (pokemonInfoFactory, bodyFactory) {
  var vm = this
  vm.back = back
  vm.state = pokemonInfoFactory.state

  function back () {
    pokemonInfoFactory.hideInfo()
    bodyFactory.allowScroll()
  }
}
