'use strict';

/* Declare a module */
var myControllerModule = angular.module('myControllerModule', []);

/* Create a controller in this module */
var IndexCtrl = function ($scope, ApiService) {
        /* 
         * This service function returns a 'promise'
         * use then to catch wait for the actual result
         */
        ApiService.getName().then(function(result) {
            $scope.message = "Hello, I am " + result + ". Happy coding!";
        });
    };
IndexCtrl.$inject = ['$scope', 'ApiService']; // inject dependency
myControllerModule.controller('IndexCtrl', IndexCtrl); // finally, register this controller for real

/* Create another controller in this module */
var OtherCtrl = function ($scope, MathService) {

        $scope.sum = MathService.add(100, 345);

    };
OtherCtrl.$inject = ['$scope', 'MathService']; // inject dependency
myControllerModule.controller('OtherCtrl', OtherCtrl); // finally, register this controller for real