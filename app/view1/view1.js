'use strict';

angular.module('suitableTask.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$location', 'UserService', 'LinkedInService', function($scope, $location, user, linkedin) {
    //Controller handes the Linkedin Authorization
    $scope.error = false;

    $scope.liAuth = function() {
        linkedin.authorizeUser(makeGetProfileApiCall);
    };

    function makeGetProfileApiCall() {
        var fields = ['first-name', 'last-name',
            'headline', 'num-connections', 'summary', 'picture-url',
            'email-address', 'positions'];
        linkedin.getProfileData(showProfileInfo, showErrorMessage, fields);
    }

    function showProfileInfo(profiles) {
        var member = profiles.values[0];

        user.setUser(member);
        console.log(user.getUser());

        // Reroute to view2.html
        $location.path('/view2');
        $scope.$apply();
    }

    function showErrorMessage() {
        $scope.error = true;
    }
}]);
