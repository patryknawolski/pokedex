angular
	.module('app.filters')
  .filter('pokemonsByTypes', function () {
    return function (pokemons, types) {
      if (!types.length) {
        return pokemons
      } else {
        var filtered = pokemons.filter(function (pokemon) {
          for (var i = 0; i < pokemon.type.length; i++) {
            var type = pokemon.type[i].toLowerCase()

            if (types.indexOf(type) > -1) return true
          }
        })

        return filtered
      }
    }
  })
