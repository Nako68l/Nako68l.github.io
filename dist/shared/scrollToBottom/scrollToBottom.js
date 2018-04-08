'use strict';

angular.module('scrollToBottom', [])
    .directive('scrollToBottom', ScrollToBottom);

ScrollToBottom.$inject = ['$timeout'];

function ScrollToBottom($timeout) {
    return {
        scope: {
            scrollToBottom: '<'
        },
        restrict: 'A',
        link: function (scope, element) {
            scope.$watchCollection('scrollToBottom', function (newVal) {
                if (newVal) {
                    $timeout(function () {
                        element[0].scrollTop = element[0].scrollHeight;
                    });
                }
            })
        }
    }
}