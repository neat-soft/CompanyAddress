'use strict';

angular.module('CompanyApp')
  .controller('ListCtrl', function ($scope,toastr, $http,$location,employeeHelper,employeeService) {
    var vthis = this;
    vthis.employees = [];
    /* Init Employees if app starts first time */
    if (employeeHelper.getInitFlag() == false)
    {
      employeeHelper.setInitFlag(true);
      employeeService.getInit()
      .success(function(employees){
        if (employees.length >0){
            vthis.employees = employees.reverse();
        }
      }).error(function(err){
        toastr.error("Error: Server not found data.");
      });    
    }
    /* Get Employees from Server */
    else {
      employeeService.get()
        .success(function(employees){
          if (employees.length >0){
              vthis.employees = employees.reverse();
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
      //$http.delete('/api/employee/'+employee.id) // + '&param='+value
      employeeService.remove(employee.id)   // + '&param='+value
        .success(function(employees){
          vthis.employees = [];
          if (employees.length >0){
            vthis.employees = employees.reverse();
          }
          employeeHelper.setCurrentEmployee(undefined);
          toastr.success("Removed from server.");
        }).error(function(err){
          toastr.error("Error: Cannot remove.");
      });       
    };

});