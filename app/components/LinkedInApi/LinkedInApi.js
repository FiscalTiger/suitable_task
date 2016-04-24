/*
    Service to pass user's information between views
*/

(function () {
    'use strict';

    angular
        .module('suitableTask')
        .service('LinkedInService', LinkedInService);

    LinkedInService.$inject = ['$rootScope'];
    function LinkedInService($rootScope) {

        this.getProfileData = function(successCallback, failureCallback, fields) {
            if(typeof fields === 'undefined') {
                IN.API.Profile("me")
                    .result(successCallback)
                    .error(failureCallback);
            } else {
                IN.API.Profile("me")
                    .fields(fields)
                    .result(successCallback)
                    .error(failureCallback);
            }
        }

        this.authorizeUser = function(successCallback) {
            IN.User.authorize(successCallback);
        }

        this.logOutUser = function(successCallback, failureCallback) {
            IN.User.logout(callback);
        }

    }
})();
