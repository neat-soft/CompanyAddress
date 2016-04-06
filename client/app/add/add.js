'use strict';

angular.module('CompanyApp')
  .config(function ($routeProvider) {
  	
    $routeProvider
      .when('/add', {
        templateUrl: 'app/add/add.html',
        controller: 'AddCtrl'
      });
  });