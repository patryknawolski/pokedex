angular
  .module('app.pokemons')
  .controller('PokemonsController', PokemonsController)

/* @ngInject */
function PokemonsController (dataFactory) {
  var vm = this
  vm.nameFilter = ''
  vm.orderByOptions = [
    {
      label: 'Original'
    },
    {
      label: 'Name',
      property: 'name'
    },
    {
      label: 'HP',
      property: 'stats.hp'
    },
    {
      label: 'Attack',
      property: 'stats.attack'
    },
    {
      label: 'Defense',
      property: 'stats.defense'
    }
  ]
  vm.orderBy = vm.orderByOptions[0]
  vm.orderReverse = false
  vm.pokemons = []
  vm.types = {}
  vm.getActiveTypes = getActiveTypes
  vm.toggleType = toggleType

  activate()

  function activate () {
    getPokemons()
    getTypes()
  }

  function getPokemons () {
    return dataFactory.getPokemons()
      .then(function (data) {
        vm.pokemons = data
        return vm.pokemons
      })
  }

  function getTypes () {
    return dataFactory.getTypes()
      .then(function (data) {
        var types = {}

        angular.forEach(data, function (type, $index) {
          types[type] = {
            active: false
          }
        })

        vm.types = types
        return vm.types
      })
  }

  function getActiveTypes () {
    var activeTypes = []

    angular.forEach(vm.types, function (typeObj, type) {
      if (typeObj.active) activeTypes.push(type)
    })

    return activeTypes
  }

  function toggleType (type) {
    vm.types[type].active = !vm.types[type].active
  }
}
