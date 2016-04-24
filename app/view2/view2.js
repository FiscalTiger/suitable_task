'use strict';

angular.module('suitableTask.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$location', 'UserService', 'LinkedInService', function($scope, $location, user, linkedin) {
    $scope.firstName = user.getFirstName();
    $scope.lastName = user.getLastName();
    $scope.pictureUrl = user.getPictureUrl();
    $scope.connections =  user.getConnections();
    $scope.userEmail = user.getUserEmail();
    $scope.summary = user.getUserSummary();
    $scope.position = user.getPosition();

    $scope.lLogOut = function() {
        linkedin.logOutUser(endSession);
    };

    function endSession() {
        // Reroute to view2.html
        $location.path('/view1');
        $scope.$apply();
    }
}]);
