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
        },
        getProject: function(id) {
          var deferred = $q.defer();
          $http.get('/api/project/' + id)
            .success(function(project){
              deferred.resolve(project);
            })
            .error(function(err){
              deferred.reject(err);
            });
          return deferred.promise;
        },
        completeProject: function(project) {
          var deferred = $q.defer();
          $http.put('/api/project', project)
            .success(function(good){
              deferred.resolve(good);
            })
            .error(function(err){
              deferred.reject(err);
            });
          return deferred.promise;
        }
      };
    }]);
})();
