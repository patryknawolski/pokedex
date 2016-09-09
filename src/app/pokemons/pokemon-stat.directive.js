angular
  .module('app.pokemons')
  .directive('pokemonStat', pokemonStat)

function pokemonStat () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      points: '@',
      types: '<'
    },
    templateUrl: 'app/pokemons/pokemon-stat.html'
  }
}
