'use strict';

angular.module('todo')
    .component('todo', {
        templateUrl: 'main/todo/todo.html',
        css: 'main/todo/todo.css',
        controller: TodoController
    });

function TodoController() {
    let vm = this;
}