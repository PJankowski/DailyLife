(function(){
  'use strict';

  angular.module('DailyLife')
    .factory('Auth', ['$http', '$q', 'Token', function($http, $q, Token){
      return {
        login: function(user) {
          var deferred = $q.defer();
          $http.post('/api/auth/login', user)
            .success(function(token){
              var payload = Token.decodeToken(token);
              deferred.resolve(payload);
            })
            .error(function(err){
              deferred.reject(err);
            });
          return deferred.promise;
        },
        signup: function(user) {
          var deferred = $q.defer();
          $http.post('/api/auth/signup', user)
            .success(function(newUser){
              deferred.resolve(newUser);
            })
            .error(function(err) {
              deferred.reject(err);
            });
          return deferred.promise;
        }
      };
    }]);
})();
