angular
  .module('app.pokemons')
  .directive('pokemonStat', pokemonStat)

function pokemonStat () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      points: '@'
    },
    require: '^pokemonStats',
    templateUrl: 'app/pokemons/pokemon-stat.html',
    link: function (scope, element, attrs, pokemonStatsCtrl) {
      scope.types = pokemonStatsCtrl.types

      scope.$on('highestStatPointsCounted', function (event, data) {
        scope.highestStatPoints = data
      })

      pokemonStatsCtrl.registerStat(scope)
    }
  }
}
