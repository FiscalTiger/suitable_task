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

    //authorize the user
    $scope.liAuth = function() {
        linkedin.authorizeUser(makeGetProfileApiCall);
    };

    //make the call to the linkedin api to receive the profile info
    function makeGetProfileApiCall() {
        var fields = ['first-name', 'last-name',
            'headline', 'num-connections', 'summary', 'picture-url',
            'email-address', 'positions'];
        linkedin.getProfileData(showProfileInfo, showErrorMessage, fields);
    }

    // handle the sucessful api call
    function showProfileInfo(profiles) {
        var member = profiles.values[0];

        user.setUser(member);
        console.log(user.getUser());

        // Reroute to view2.html
        $location.path('/view2');
        $scope.$apply();
    }

    // handle error during api call
    function showErrorMessage() {
        $scope.error = true;
    }
}]);
