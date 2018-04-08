'use strict';

// Declare app level module which depends on views, and components
angular.module('dairy', [
    'ngRoute',
    'dairy.main',
    'sidebar',
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}]);
