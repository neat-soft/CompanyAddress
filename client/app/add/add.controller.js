'use strict';

angular.module('CompanyApp')
  .controller('AddCtrl', function ($scope,toastr,$location, $http,employeeService) {
    console.log("In AddController");
    $scope.addEmployee = function(employee){
      $scope.submitted = true;
      employeeService.add(employee)
        .success(function(employeeFromServer){
          console.log(employeeFromServer);
          toastr.success("Added Successfully.", {timeOut: 1000});
          $location.path('/list');
        }).error(function(e){
      	  toastr.error(e, {timeOut: 1000});
      });
    };
});
