'use strict';

angular.module('dairy.main', ['ngRoute',
    'todo'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            template: '<todo></todo>'
        })
    }]);