'use strict';

angular.module('suitableTask.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$rootScope', '$scope', '$location', 'UserService',function($rootScope, $scope, $location, user) {
    //Controller handes the Linkedin Authorization
    $scope.liAuth = function() {
        IN.User.authorize(function(){
            IN.API.Profile("me").fields('first-name', 'last-name', 'headline', 'num-connections', 'summary', 'picture-url', 'email-address', 'positions').result(showProfileInfo);
        });
    };

    function showProfileInfo(profiles) {
        var member = profiles.values[0];
        user.setUser(member);
        console.log(user.getUser());

        // Reroute to view2.html
        $location.path('/view2');
        $scope.$apply();
    }
}]);
