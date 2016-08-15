angular
  .module('app.layout')
  .controller('SidebarController', SidebarController)

function SidebarController () {
  var vm = this
  vm.addTab = addTab
  vm.isOpen = false
  vm.selectTab = selectTab
  vm.tabs = []
  vm.toggle = toggle

  function addTab (tab) {
    vm.tabs.push(tab)

    if (vm.tabs.length === 1) {
      tab.active = true
    }
  }

  function selectTab (selectedTab) {
    angular.forEach(vm.tabs, function (tab) {
      if (tab.active && tab !== selectedTab) {
        tab.active = false
      }
    })

    selectedTab.active = true
  }

  function toggle () {
    vm.isOpen = !vm.isOpen
  }
}
