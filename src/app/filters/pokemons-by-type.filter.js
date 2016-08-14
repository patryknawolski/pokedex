angular
	.module('app.filters')
  .filter('pokemonsByTypes', function () {
    return function (pokemons, types) {
      if (types.length === 0) return pokemons
      var filtered = []

      for (var i = 0; i < pokemons.length; i++) {
        var pokemon = pokemons[i]
        for(var x = 0; x < 1; x++) {
          var type = pokemon.type[x].toLowerCase()
          var found = false

          if (!found && types.indexOf(type) > -1) {
            filtered.push(pokemon)
            found = true
          }
        }
      }

      return filtered
    }
  })