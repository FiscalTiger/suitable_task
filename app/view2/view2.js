'use strict';

angular.module('suitableTask.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'UserService', function($scope, user) {
    $scope.firstName = user.getFirstName();
    $scope.lastName = user.getLastName();
    $scope.pictureUrl = user.getPictureUrl();
    $scope.connections =  user.getConnections();
    $scope.userEmail = user.getUserEmail();
    $scope.summary = user.getUserSummary();
    $scope.position = user.getPosition();
}]);
