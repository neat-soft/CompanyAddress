'use strict';

angular.module('CompanyApp')
  .factory('employeeHelper', function(){
    var newEmployee;
    var selectedEmployee;
    var EA = {};
    var Employees = [];
    EA.setEmployees = function(employees){
      var anEmployee;
      for (var employeeIndex = 0; employeeIndex<employees.length; employeeIndex++){
      	anEmployee = {};
      	anEmployee.first_name = employees[employeeIndex].first_name;
      	anEmployee.last_name = employees[employeeIndex].last_name;
      	anEmployee.email = employees[employeeIndex].email;
      	anEmployee.company = employees[employeeIndex].company;
      	Employees.push(anEmployee);
      }
    };

    EA.addNewEmployee=function(employee){
      var anEmployee = {};
      anEmployee.first_name = employee.first_name;
      anEmployee.last_name = employee.last_name;
      anEmployee.email = employee.email;
      anEmployee.company = employee.company;
      Employees.push(anEmployee);
    }

    EA.UpdateEmployee=function(employee){
      for (var employeeIndex = 0; employeeIndex<Employees.length; employeeIndex++)
      	if (Employees[employeeIndex].email === employee.email){
      		Employees[employeeIndex].first_name = employee.first_name;
      		Employees[employeeIndex].last_name = employee.last_name;
      		Employees[employeeIndex].email = employee.email;
      		Employees[employeeIndex].company = employee.company;
      		return true;
      	}
    };
    EA.setCurrentEmployee=function(employee){
      selectedEmployee = employee;
    }
    EA.getCurrentEmployee=function(){
      return selectedEmployee;
    };
    return EA;
  });