(function(){
  'use strict';

  angular.module('DailyLife')
    .controller('DashboardCtrl', ['$scope', 'Project', function($scope, Project){
      Project.getAll()
        .then(function(projects){
          $scope.projects = projects;
        }, function(err){
          console.log(err);
        });

      $scope.changeFilter = function(text) {
        $scope.status_filter = text;
      };
    }]);
})();
