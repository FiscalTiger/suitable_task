/*
    Service to pass user's information between views
*/

(function () {
    'use strict';

    angular
        .module('suitableTask')
        .service('UserService', UserService);

    UserService.$inject = ['$rootScope'];
    function UserService($rootScope) {

        var user;

        this.setUser = function(member) {
            user = member;
            $rootScope.$broadcast( 'user.set' );
        }

        this.getUser = function() {
            return user;
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
