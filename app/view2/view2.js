'use strict';

angular.module('suitableTask.view2', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$location', '$window', 'UserService', 'LinkedInService', 'PostService', function($scope, $location, $window, user, linkedin, posts) {
    $scope.createForm = false;
    $scope.postError = false;

    if(!$window.localStorage.getItem("id")) {
        $window.localStorage.setItem("id", "0");
    }
    // User is set then we should load the profile
    if($window.sessionStorage.getItem("user")) {
        $scope.firstName = user.getFirstName();
        $scope.lastName = user.getLastName();
        $scope.pictureUrl = user.getPictureUrl();
        $scope.connections =  user.getConnections();
        $scope.userEmail = user.getUserEmail();
        $scope.summary = user.getUserSummary();
        $scope.position = user.getPosition();
        $scope.posts = posts.getPosts($scope.userEmail);
    } else {
        // Reroute to view1.html
        $location.path('/view1');
    }

    // Log out handler
    $scope.lLogOut = function() {
        linkedin.logOutUser(endSession);
    };

    // Animation for the post form
    $scope.createFormForPost =  function() {
        $scope.createForm = true;
    };

    $scope.submitPost = function() {
        $scope.post.id = parseInt($window.localStorage.getItem("id"));
        $window.localStorage.setItem("id", ++$scope.post.id);
        $scope.postError = false;
        $scope.post.date = new Date();

        if($scope.post) {
            posts.addPost($scope.userEmail, $scope.post);
            $scope.posts = posts.getPosts($scope.userEmail);
        }

        linkedin.makePost($scope.post)
            .error(postErrorCallback);

        resetForm();
    };

    $scope.cancelPost = function() {
        resetForm();
    };

    function postErrorCallback(response) {
        $scope.postError = true;
        resetForm();
    }

    function resetForm() {
        $scope.post = {};
        $scope.postForm.$setPristine();
        $scope.createForm = false;
    }

    function endSession() {
        user.removeUser();
        // Reroute to view1.html
        $location.path('/view1');
        $scope.$apply();
    }
}]);
