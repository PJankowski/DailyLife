(function(){
  'use strict';

  angular.module('DailyLife', ['ui.router', 'angular-jwt'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){
      $urlRouterProvider.otherwise('/login');
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: '/app/partials/login.html',
          controller: 'AuthCtrl'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: '/app/partials/signup.html',
          controller: 'AuthCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: '/app/partials/dashboard.html',
          controller: 'DashboardCtrl'
        });
    }]);
})();
