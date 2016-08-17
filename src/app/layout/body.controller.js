angular
	.module('app.layout')
  .controller('BodyController', BodyController)

function BodyController (bodyFactory) {
  var vm = this
  vm.state = bodyFactory.state
}
