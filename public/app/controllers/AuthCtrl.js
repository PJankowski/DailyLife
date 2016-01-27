(function(){
  'use strict';

  angular.module('DailyLife')
    .controller('AuthCtrl', ['$scope', '$rootScope', '$state', 'Auth', function($scope, $rootScope, $state, Auth){
      $scope.logError = '';

      $scope.login = function(user) {
        Auth.login(user)
          .then(function(loggedUser){
            $rootScope.user = loggedUser;
            $state.go('dashboard');
          }, function(err){
            if (err.status === 401) {
              $scope.logError = err.msg;
            } else {
              $scope.logError = 'Cannot process this action at this time.';
            }
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
