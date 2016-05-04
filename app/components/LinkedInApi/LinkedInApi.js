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

        this.makePost = function(postJson) {
            // Build the JSON payload containing the content to be shared
            var payload = {
              "content": {
                  "title": postJson.content.title,
                  "description": postJson.content.description,
                  "submittedUrl": postJson.content.submittedUrl,
              },
              "visibility": {
                "code": postJson.visibility.code
              }
            };

            if(postJson.content.submittedImageUrl) {
                payload.content.submittedImageUrl = postJson.content.submittedImageUrl;
            }

            if(postJson.comment) {
                payload.comment = postJson.comment;
            }

            console.log(payload);

            return IN.API.Raw("/people/~/shares?format=json")
              .method("POST")
              .body(JSON.stringify(payload));
          }

        this.authorizeUser = function(callback) {
            IN.User.authorize(callback);
        }

        this.logOutUser = function(callback) {
            IN.User.logout(callback);
        }

    }
})();
