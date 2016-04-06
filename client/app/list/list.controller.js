'use strict';

angular.module('CompanyApp')
  .controller('ListCtrl', function ($scope,toastr, $http,$location,employeeHelper) {
	console.log("In EditController");
    $scope.employees=[];
    $scope.no = 0;

    /* Init Employees if app starts first time */
    if (employeeHelper.getInitFlag() == false)
    {
      employeeHelper.setInitFlag(true);
      $http.get('/api/employee/getInitEmployee')
      .success(function(employees){
        if (employees.length >0)
          {
            for (var indexOfEmployee = employees.length-1; indexOfEmployee >= 0;indexOfEmployee--){
              if (employees[indexOfEmployee] != undefined && employees[indexOfEmployee] != null)
              {
                
                $scope.employees.push(employees[indexOfEmployee]);
              }
            }
          }
      }).error(function(err){
        toastr.error("Error: Server not found data.");
      });    
    }
    /* Get Employees from Server */
    else {
      $http.get('/api/employee/getEmployee')
        .success(function(employees){
          if (employees.length >0)
            {
              for (var indexOfEmployee = employees.length-1; indexOfEmployee >= 0;indexOfEmployee--){
                if (employees[indexOfEmployee] != undefined && employees[indexOfEmployee] != null)
                {
                  $scope.employees.push(employees[indexOfEmployee]);
                }
              }
            }
        }).error(function(err){
        	toastr.error("Error: Server not found data.");
        });
     }
    /* Edit Function*/
    $scope.editEmployee = function(employee){
    	employeeHelper.setCurrentEmployee(employee);
    	$location.path('/edit');
    };
    /* View Function*/
    $scope.viewEmployee = function(employee){
    	employeeHelper.setCurrentEmployee(employee);
    	$location.path('/view');
    };
    /* Delete Function*/
    $scope.deleteEmployee = function(employee,index){
      
      $http.delete('/api/employee/'+employee.id) // + '&param='+value
        .success(function(employees){
          //$scope.employees.splice(index,1);
          $scope.employees = [];
         if (employees.length >0)
          {
            for (var indexOfEmployee = employees.length-1; indexOfEmployee >= 0;indexOfEmployee--){
              if (employees[indexOfEmployee] != undefined && employees[indexOfEmployee] != null)
              $scope.employees.push(employees[indexOfEmployee]);
            }
          }
          employeeHelper.setCurrentEmployee(undefined);
          toastr.success("Removed from server.");
        }).error(function(err){
          toastr.error("Error: Cannot remove.");
      });       
    };

});