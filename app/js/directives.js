'use strict';

/* Declare a new module */
var myDirectiveModule = angular.module('myDirectiveModule', []);

/* Create a new directive
 * titleDirective (in script) = title-directive (in html)
 */
myDirectiveModule.directive('titleDirective', function() {
    return {
        templateUrl: './app/template/title-template.html'
    };
});