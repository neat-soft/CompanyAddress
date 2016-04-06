'use strict';

angular.module('CompanyApp')
  .controller('ViewCtrl', function ($scope, employeeHelper,$http) {
    console.log("In ViewController");
    $scope.currentEmployee = employeeHelper.getCurrentEmployee();
      });
