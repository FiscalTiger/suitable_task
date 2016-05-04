/*
    Service to pass user's information between views
    Used sessionStorage to store information during refresh (workaround)
*/

(function () {
    'use strict';

    angular
        .module('suitableTask')
        .service('UserService', UserService);

    UserService.$inject = ["$window"];
    function UserService($window) {

        var user = angular.fromJson($window.sessionStorage.getItem("user")) || {};

        this.setUser = function(member) {
            user = member;
            $window.sessionStorage.setItem('user', JSON.stringify(user));
        }

        this.getUser = function() {
            return user;
        }

        this.removeUser = function() {
            $window.sessionStorage.clear();
            user = {};
        }

        this.getFirstName = function() {
            return user.firstName;
        }

        this.getLastName = function() {
            return user.lastName;
        }

        this.getPictureUrl = function() {
            return user.pictureUrl;
        }

        this.getHeadline = function() {
            return user.headline;
        }

        this.getConnections = function() {
            return user.numConnections;
        }

        this.getUserEmail = function() {
            return user.emailAddress;
        }

        this.getUserSummary = function() {
            return user.summary;
        }

        this.getPosition = function() {
            if(user.positions._total > 0) {
                return user.positions.title;
            }
            else {
                return user.headline;
            }
        }

    }
})();
