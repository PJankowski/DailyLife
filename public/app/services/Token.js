(function(){
  'use strict';

  angular.module('DailyLife')
    .factory('Token', ['jwtHelper', function(jwtHelper){
      return {
        decodeToken: function(token) {
          var payload = jwtHelper.decodeToken(token);
          return payload;
        },
        getTokenExpirationDate: function(token) {
          var date = jwtHelper.getTokenExpirationDate(token);
          return date;
        },
        isTokenExpired: function(token) {
          var bool = jwtHelper.isTokenExpired(token);
          return bool;
        }
      };
    }]);
})();
