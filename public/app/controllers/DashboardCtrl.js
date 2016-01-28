(function(){
  'use strict';

  angular.module('DailyLife')
    .controller('DashboardCtrl', ['$scope', 'Project', function($scope, Project){
      $scope.currentProject = {};

      Project.getAll()
        .then(function(projects){
          $scope.projects = projects;
        }, function(err){
          console.log(err);
        });

      $scope.addProject = function() {
        angular.element('nav.add-project--form').addClass('open');
      };

      $scope.changeFilter = function(text) {
        $scope.status_filter = text;
      };

      $scope.getProject = function(id) {
        Project.getProject(id)
          .then(function(project){
            $scope.currentProject = project;
            angular.element('section.project').addClass('open');
          }, function(err){
            console.log(err);
          });
      };
    }]);
})();
