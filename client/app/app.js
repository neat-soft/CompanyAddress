'use strict';

var myApp = angular.module('CompanyApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'angular-loading-bar',
  'infinite-scroll',
  'updateMeta',
  'toastr'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    //$httpProvider.useApplyAsync(true);
  });