'use strict';

angular.module('CompanyApp')
  .controller('AddCtrl', function ($scope,toastr, $http) {
    console.log("In AddController");
    $scope.addEmployee = function(employee){
      $scope.submitted = true;
      $http.post('/api/employee/addEmployee',employee)
        .success(function(employeeFromServer){
          toastr.success("Added Successfully.", {timeOut: 1000});
        }).error(function(e){
      	  toastr.error(e, {timeOut: 1000});
      });
    };
});
