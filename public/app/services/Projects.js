(function(){
  'use strict';

  angular.module('DailyLife')
    .factory('Project', ['$http', '$q', function($http, $q){
      return {
        getAll: function() {
          var deferred = $q.defer();
          $http.get('/api/projects')
            .success(function(projects){
              deferred.resolve(projects);
            })
            .error(function(err){
              deferred.reject(err);
            });
          return deferred.promise;
        },
        addProject: function(project) {
          var deferred = $q.defer();
          $http.post('/api/project', project)
            .success(function(newProject){
              deferred.resolve(newProject);
            })
            .error(function(err){
              deferred.reject(err);
            });

          return deferred.promise;
        }
      };
    }]);
})();
