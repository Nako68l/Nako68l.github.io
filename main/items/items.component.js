'use strict';

angular.module('items')
    .component('items', {
        templateUrl: 'main/items/items.html',
        css: 'main/items/items.css',
        controller: ItemsController,
        bindings: {
            selectedItem: '=',
            itemPositionNumber: '='
        }
    });

ItemsController.$inject = ['$scope', 'itemsStorageService'];

function ItemsController($scope, itemsStorageService) {
    let vm = this;
    vm.$onInit = onInit;
    vm.currentItem = '';
    vm.items = [];

    function onInit() {
        vm.items = itemsStorageService.getAll() || [];
    }

    vm.addItem = function () {
        if (vm.currentItem !== null && vm.currentItem.trim().length > 0) {
            let itemObj = {id: new Date().getTime(), value: vm.currentItem, commentsCount: 0};
            itemsStorageService.saveOne(itemObj);
            vm.items.push(itemObj);
            vm.currentItem = ''
        }
    };

    vm.selectItem = function (selectedItem) {
        vm.selectedItem = selectedItem;
        localStorage.setItem('selectedItem', angular.toJson(selectedItem));
        vm.itemPositionNumber = vm.items.indexOf(selectedItem)+1;
        localStorage.setItem('itemPositionNumber', vm.itemPositionNumber);
    };

    vm.deleteItem = function (id) {
        if (vm.selectedItem && angular.equals(vm.selectedItem.id, id)){
            vm.selectedItem = null;
        }
        vm.itemPositionNumber = vm.items.indexOf(vm.selectedItem)+1;
        vm.items = vm.items.filter(el => !angular.equals(el.id, id));
        itemsStorageService.removeById(id);
    }

}