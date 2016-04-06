'use strict';

angular.module('CompanyApp')
  .config(function ($stateProvider) {
    $stateProvider  	
  	  .state('view', {
        url:'/view',
        templateUrl: 'app/view/view.html',
        controller: 'ViewCtrl'
      });      
  });