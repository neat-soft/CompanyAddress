(function () {
  'use strict';
  angular.module('CompanyApp')
    .service('employeeService',employeeService);

  employeeService.$inject = ['$http'];
  function employeeService($http) {
    return {
      add: add,
      update: update,
      get: get,
      getInit: getInit,
      remove: remove
    };  

  function add(employee) {
      return $http.post('/api/employee/addEmployee',employee);
  }

  function update(employee){
      return $http.post('/api/employee/updateEmployee',employee)
  }

  function getInit(employee) {
      return $http.get('/api/employee/getInitEmployee');
  }

  function get(employee) {
      return $http.get('/api/employee/getEmployee');
  }
  function remove(employeeId) {
      return $http.delete('/api/employee/'+employeeId)
  }
 }

})();