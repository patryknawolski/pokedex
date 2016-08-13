;(function () {
  angular
    .module('app', [
      // Shared
      'app.core',
      'app.filters',
      'app.widgets',
      'app.layout',

      // Feature areas
      'app.pokemons'
    ])
})()
