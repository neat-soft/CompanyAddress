'use strict';

angular.module('CompanyApp')
  .controller('EditCtrl', function ($scope, toastr,$http,$location,employeeHelper) {
    console.log("In EditController");
    $scope.currentEmployee = {};
    $scope.currentEmployee = employeeHelper.getCurrentEmployee();
        
    $scope.saveEmployee = function(employee){
	  $http.post('/api/employee/updateEmployee',employee)
      .success(function(employeeFromServer){
        console.log(employeeFromServer);
        $location.path('/list');
        //$scope.currentEmployee = employeeFromServer;
      }).error(function(e){
      	  toastr.error(e, {timeOut: 1000});
      });
    };    
});
