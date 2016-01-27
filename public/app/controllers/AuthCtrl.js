(function(){
  'use strict';

  angular.module('DailyLife')
    .controller('AuthCtrl', ['$scope', '$rootScope', '$state', 'Auth', function($scope, $rootScope, $state, Auth){
      $scope.login = function(user) {
        Auth.login(user)
          .then(function(loggedUser){
            $rootScope.user = loggedUser;
            $state.go('dashboard');
          }, function(err){
            console.log(err);
          });
      };

      $scope.signup = function(user) {
        Auth.signup(user)
          .then(function(newUser) {
            $rootScope.user = newUser;
            $state.go('dashboard');
          }, function(err) {
            console.log(err);
          });
      };
    }]);
})();
