/*
    Service to add posts for current view
*/

(function () {
    'use strict';

    angular
        .module('suitableTask')
        .service('PostService', PostService);

    PostService.$inject = ["$window"];
    function PostService($window) {

        var posts = [];

        this.addPost = function(user, postJson) {
            posts.unshift(postJson);
            $window.localStorage.setItem(user, JSON.stringify(posts));
        }

        // workaround to make sure the posts persist in app. Would normally use
        // a db but this is just a quick and dirty solution
        this.getPosts = function(user) {
            if(posts.length === 0) {
                posts = angular.fromJson($window.localStorage.getItem(user)) || [];
            }

            return posts;
        }

    }
})();
