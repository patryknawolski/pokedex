angular
  .module('app.pokemons')
  .controller('PokemonsController', PokemonsController)

function PokemonsController () {
  this.filter = []
  this.toggleFilter = toggleFilter

  function toggleFilter (type) {

  }
}
