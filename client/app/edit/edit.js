'use strict';

angular.module('CompanyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/edit', {
        templateUrl: 'app/edit/edit.html',
        controller: 'EditCtrl'
      });
  });