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

      $scope.openProjectForm = function() {
        angular.element('nav.add-project--form').addClass('open');
      };

      $scope.addProject = function(newProject) {
        Project.addProject(project)
          .then(function(project){
            $scope.projects.push(project);
          }, function(err){
            console.log(err);
          });
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

      $scope.completeProject = function(project) {
        project.status = 'complete';

        project.completeProject(project)
          .then(function(){
            console.log('Yay!');
          }, function(err){
            console.log(err);
          });
      };
    }]);
})();
