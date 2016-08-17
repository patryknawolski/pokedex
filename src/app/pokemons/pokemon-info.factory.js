angular
  .module('app.pokemons')
  .factory('pokemonInfoFactory', pokemonInfoFactory)

function pokemonInfoFactory () {
  var service = {
    state: {
      active: false,
      pokemon: null
    },
    showInfo: showInfo,
    hideInfo: hideInfo
  }

  return service

  function showInfo (pokemon) {
    service.state.active = true
    service.state.pokemon = pokemon
  }

  function hideInfo () {
    service.state.active = false
    service.state.pokemon = null
  }
}
