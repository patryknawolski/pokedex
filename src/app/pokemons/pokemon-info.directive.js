angular
  .module('app.pokemons')
  .directive('pokemonInfo', pokemonInfo)

function pokemonInfo () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/pokemons/pokemon-info.html',
    controller: 'PokemonInfoController',
    controllerAs: 'vm'
  }
}
