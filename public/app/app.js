(function(){
  'use strict';

  angular.module('DailyLife', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
      $urlRouterProvider.otherwise('/login');

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: '/app/partials/login.html',
          controller: 'AuthCtrl'
        });
    }]);
})();
