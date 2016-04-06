'use strict';

angular.module('CompanyApp')
  .config(function ($stateProvider) {

  	$stateProvider  	
  	  .state('list', {
        url:'/list',
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl'
    })

    /*$routeProvider
      .when('/list', {
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl'
      });*/
  });