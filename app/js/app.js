'use strict';

/* App Module */
var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllerModule',
  'myServiceModule',
  'myDirectiveModule'
]);



// myApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//     when('/', {
//       templateUrl:  "views/index.html",
//       controller: 'IndexCtrl'
//     }).
//     otherwise({
//       redirectTo: '/'
//     });
//   }]);
//"partials/phone-detail.html",