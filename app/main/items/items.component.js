'use strict';

angular.module('items')
    .component('items', {
        templateUrl: 'main/items/items.html',
        css: 'main/items/items.css',
        controller: ItemsController
    });

ItemsController.$inject = ['$scope', 'itemsStorageService'];

function ItemsController($scope, itemsStorageService) {
    let vm = this;
    vm.$onInit = onInit;
    vm.item = '';
    vm.items = [];
    vm.selectedItem = 0;

    function onInit() {
        vm.items = itemsStorageService.getAll() || [];
    }

    vm.addItem = function () {
        if (vm.item !== null && vm.item.trim().length > 0) {
            let itemObj = {id: new Date().getTime(), value: vm.item, commentsCount: 0};
            itemsStorageService.saveOne(itemObj);
            vm.items.push(itemObj);
            vm.item = null
        }
    };

    vm.selectItem = function (id) {
        vm.selectedItem = id;
    };

    vm.deleteItem = function (id) {
        vm.items = vm.items.filter(el => !angular.equals(el.id, id));
        itemsStorageService.removeById(id);
    }

}