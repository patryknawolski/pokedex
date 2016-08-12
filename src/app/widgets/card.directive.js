angular
  .module('app.widgets')
  .directive('card', card)

function card () {
  return {
    restrict: 'E',
    scope: {
      pokemon: '<'
    },
    templateUrl: 'app/widgets/card.html'
  }
}
