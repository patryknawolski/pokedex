angular
  .module('app.core')
  .factory('dataFactory', dataFactory)

/* @ngInject */
function dataFactory ($http, $log) {
  var service = {
    getPokemons: getPokemons
  }

  return service

  function getPokemons () {
    return $http.get('data/pokemons.json')
      .then(getPokemonsComplete)
      .catch(getPokemonsFailed)

    function getPokemonsComplete (response) {
      return response.data
    }

    function getPokemonsFailed (error) {
      $log.error('XHR failed for getPokemons.\n' + error.data)
    }
  }
}
