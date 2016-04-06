'use strict';

angular.module('CompanyApp')
  .controller('ViewCtrl', function ($scope, employeeHelper,$http) {
    console.log("In ViewController");

    this.currentEmployee = employeeHelper.getCurrentEmployee();
      });
