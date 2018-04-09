'use strict';

angular.module('todo')
    .component('todo', {
        templateUrl: 'app/main/todo/todo.html',
        css: 'app/main/todo/todo.css',
        controller: TodoController
    });

TodoController.$inject = ['selectedItemStorage'];

function TodoController(selectedItemStorage) {
    let vm = this;
    vm.$onInit = onInit;

    function onInit(){
        vm.selectedItem = selectedItemStorage.getSelectedItem() ;
        vm.itemPositionNumber = selectedItemStorage.getItemPositionNumber();
    }
}