angular
  .module('app.pokemons')
  .directive('pokemonsFilters', pokemonsFilters)

function pokemonsFilters () {
  return {
    restrict: 'E',
    scope: {
      types: '=',
      onTypeClick: '&'
    },
    bindToController: true,
    templateUrl: 'app/pokemons/pokemons-filters.html',
    controller: function () {

    },
    controllerAs: 'vm'
  }
}
