angular
  .module('app.pokemons')
  .factory('pokemonInfoFactory', pokemonInfoFactory)

function pokemonInfoFactory () {
  var service = {
    state: {
      active: false,
      pokemon: null
    },
    hideInfo: hideInfo,
    showInfo: showInfo
  }

  return service

  function hideInfo () {
    service.state.active = false
    service.state.pokemon = null
  }

  function showInfo (pokemon) {
    service.state.active = true
    service.state.pokemon = pokemon
  }
}
