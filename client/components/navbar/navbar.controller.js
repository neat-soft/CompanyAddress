'use strict';

angular.module('CompanyApp')
  .controller('NavbarCtrl', function ($scope, $window, $location) {
    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return $location.path().split('/')[1] === route;
    };
  });
