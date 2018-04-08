'use strict';

angular.module('todo')
    .component('todo', {
        templateUrl: 'main/todo/todo.html',
        css: 'main/todo/todo.css',
        controller: TodoController
    });

TodoController.$inject = ['$scope'];

function TodoController($scope) {
    let vm = this;
    vm.$onInit = onInit;

    function onInit(){
        vm.selectedItem = angular.fromJson(localStorage.getItem('selectedItem'));
        vm.selectedItemPosition = localStorage.getItem('selectedItemPosition');
    }
}