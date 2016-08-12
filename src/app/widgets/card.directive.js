angular
  .module('app.widgets')
  .directive('card', card)

function card () {
  return {
    restrict: 'E',
    scope: {
      
    },
    templateUrl: 'app/widgets/card.html'
  }
}
