angular
  .module('app.filters')
  .filter('normalizePokemonName', normalizePokemonName)

// Changes unusual names to correct image names
  // f.e.: Nidoran♀ => Nidoranf
function normalizePokemonName () {
  return function (input) {
    if (!input) return ''

    input = input
      .replace('♀', 'f')
      .replace('♂', 'm')
      .replace(/\W+/g, '')

    return input
  }
}
