'use strict';

angular.module('suitableTask.view2', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$location', '$window', 'UserService', 'LinkedInService', function($scope, $location, $window, user, linkedin) {
    $scope.createForm = false;

    if($window.sessionStorage.getItem("user")) {
        $scope.firstName = user.getFirstName();
        $scope.lastName = user.getLastName();
        $scope.pictureUrl = user.getPictureUrl();
        $scope.connections =  user.getConnections();
        $scope.userEmail = user.getUserEmail();
        $scope.summary = user.getUserSummary();
        $scope.position = user.getPosition();
    } else {
        // Reroute to view1.html
        $location.path('/view1');
    }

    $scope.lLogOut = function() {
        linkedin.logOutUser(endSession);
    };

    $scope.createFormForPost =  function() {
        $scope.createForm = true;
    };

    function endSession() {
        user.removeUser();
        // Reroute to view1.html
        $location.path('/view1');
        $scope.$apply();
    }
}]);
