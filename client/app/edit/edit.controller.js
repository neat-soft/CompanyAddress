'use strict';

angular.module('CompanyApp')
  .controller('EditCtrl', function ($scope,toastr,$http,$location,employeeHelper,employeeService) {
    var vthis = this;
    vthis.currentEmployee = {};

    vthis.currentEmployee = employeeHelper.getCurrentEmployee();
    $scope.saveEmployee = function(employee){
    employeeService.update(employee)
      .success(function(employeeFromServer){
        console.log(employeeFromServer);
        $location.path('/list');
      }).error(function(e){
      	  toastr.error(e, {timeOut: 1000});
      });
    };    
});
