'use strict';

var Employee = require('./employee.model');
var _ = require('lodash');
var storage = require('node-persist');
var crypto = require('crypto');
var shortId = require('shortid');
var employees = [];
storage.initSync();

/* Add Employee */
exports.addEmployee = function(req,res){
	//storage.clearSync();
	var newEmployee ={};
	for (var requestProperty in req.body){
		newEmployee[requestProperty] = req.body[requestProperty];
	}
	var createEmployee = function(){
		var id = crypto.randomBytes(10).toString('hex');
		newEmployee['id'] = crypto.randomBytes(10).toString('hex');
		var index = storage.length();
		storage.setItemSync(index.toString(),newEmployee);
		return res.status(201).json(storage.getItemSync(index.toString()));
	};
	createEmployee();
};

/* Get Employees */
exports.getEmployee = function(req,res){
	employees = [];
	for (var i=0; i< storage.length(); i++){
		var employee = storage.getItemSync(i.toString());
		if (employee !== undefined)
		{
		  employees[i] = employee;
		}
	}
	return res.status(201).json(employees);
};

/* Updates selected Employee */
exports.updateEmployee = function(req,res){
	var updatedEmployee;
	for (var i=0; i< storage.length(); i++){
		var employee = storage.getItemSync(i.toString());
		if ((employee !== undefined) && (employee['id'] === req.body['id']))
		{
		  	storage.setItemSync(i.toString(),req.body);
		  	updatedEmployee = storage.getItemSync(i.toString());
		  	break;
		}
	}
	return res.status(201).json(updatedEmployee);
};

/* Delete Selected Employee */
exports.deleteEmployee = function(req, res){
	var updatedEmployee;
	var selectedEmployeeId = req.params.id;
	console.log("parameterid:   " + selectedEmployeeId);
	for (var i=0; i< storage.length(); i++){
		var employee = storage.getItemSync(i.toString());
		console.log("employeeid"+employee['id']);
		if ((employee !== undefined) && (employee['id'] === selectedEmployeeId))
		{
			console.log("in delete: employee id: "+employee['id']);
		  	storage.removeItemSync(i.toString());	  	
		  	break;
		}
	}
	return res.status(201).json(storage.values());
}

function handleError(res,err){
	return res.status(500).send(err);
}