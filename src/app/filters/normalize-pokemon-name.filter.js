angular
  .module('app.filters')
  // Changes unusual names to correct image names
  // f.e.: Nidoran♀ => Nidoranf
  .filter('normalizePokemonName', function () {
    return function (input) {
      if (!input) return ''

      input = input
        .replace('♀', 'f')
        .replace('♂', 'm')
        .replace(/\W+/g, '')

      return input
    }
  })
