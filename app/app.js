'use strict';

// Declare app level module which depends on views, and components
angular.module('suitableTask', [
  'ngRoute',
  'suitableTask.view1',
  'suitableTask.view2',
  'suitableTask.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
