'use strict';

angular.module('CompanyApp')
  .config(function ($stateProvider) {
	$stateProvider  	
  	  .state('add', {
        url:'/add',
        templateUrl: 'app/add/add.html',
        controller: 'AddCtrl'
      })

   /* $routeProvider
      .when('/add', {
        templateUrl: 'app/add/add.html',
        controller: 'AddCtrl'
      });*/
  });