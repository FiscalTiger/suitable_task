/*
    Service to pass user's information between views
*/

(function () {
    'use strict';

    angular
        .module('suitableTask')
        .service('LinkedInService', LinkedInService);

    function LinkedInService() {

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

        this.authorizeUser = function(callback) {
            IN.User.authorize(callback);
        }

        this.logOutUser = function(callback) {
            IN.User.logout(callback);
        }

    }
})();
