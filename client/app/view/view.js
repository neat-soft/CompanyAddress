'use strict';

angular.module('CompanyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/view', {
        templateUrl: 'app/view/view.html',
        controller: 'ViewCtrl'
      });
  });