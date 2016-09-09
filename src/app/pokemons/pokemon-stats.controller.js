angular
  .module('app.pokemons')
  .controller('PokemonStatsController', PokemonStatsController)

/* @ngInject */
function PokemonStatsController ($scope, $timeout) {
  var vm = this
  vm.highestStatPoints
  vm.registerStat = registerStat
  vm.stats = []

  function registerStat (stat) {
    vm.stats.push(stat)

    if (vm.stats.length === 5) {
      var highestStatPoints = getHighestStatPoints()
      $scope.$broadcast('highestStatPointsCounted', highestStatPoints)
    }
  }

  function getHighestStatPoints () {
    var statPointsArray = vm.stats.map(function (stat) {
      return stat.points
    })

    var highestStatPoints = Math.max.apply(null, statPointsArray)

    return highestStatPoints
  }
}
