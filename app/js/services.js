'use strict';

/* Declare a module */
var myServiceModule = angular.module('myServiceModule', []);

myServiceModule.service('MathService', function() {
    this.add = function(a, b) { return a + b; };
});

myServiceModule.service('ApiService', ['$timeout', function($timeout) {
    this.getName = function() {
        // fake a request that will return after 3s
        var promise = $timeout(function() {
            return 'MinhThai';
        }, 3000);
        return promise;
    }
}]);
