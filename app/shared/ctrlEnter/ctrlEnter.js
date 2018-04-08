'use strict';

angular.module('ctrlEnter', [])
    .directive('ctrlEnter', function(){
        return function (scope, element, attrs) {
            element.bind('keydown keypress', function (event) {
                let code = event.keyCode || event.which;

                if (event.ctrlKey && code === 13) { // 13 = enter key
                    scope.$apply(function () {
                        scope.$eval(attrs.ctrlEnter);
                    });
                    event.stopPropagation();
                    event.preventDefault();
                }
            });
        }
    });