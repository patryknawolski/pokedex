angular
  .module('app.pokemons')
  .directive('pokemonStats', pokemonStats)

function pokemonStats () {
  return {
    restrict: 'E',
    scope: {
      types: '<'
    },
    bindToController: true,
    transclude: true,
    controller: 'PokemonStatsController',
    controllerAs: 'vm',
    templateUrl: 'app/pokemons/pokemon-stats.html'
  }
}
