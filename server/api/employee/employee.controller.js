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
		storage.setItemSync(id,newEmployee);
		return res.status(201).json(storage.getItem(id));
	};
	createEmployee();
};

/* Get Employees */
exports.getEmployee = function(req,res){
	employees = [];
	//storage.clearSync();
	var keys = storage.keys();
	for (var i=0; i< storage.length(); i++){
		var employee = storage.getItem(keys[i]);
		if (employee !== undefined)
		{
		  employees[i] = employee;
		}
	}
	return res.status(201).json(employees);
};

/* Get Init Employee */
exports.getInitEmployee = function(req,res){
	employees = [];
	//storage.clearSync();
	var keys = storage.keys();
	var counts = 0;
	for (var i=0; i< storage.length(); i++){
		var employee = storage.getItem(keys[i]);
		if (employee !== undefined)
		{
		  employees[i] = employee;
		  counts++;
		  if (counts >=10)
		  	break;
		}
	}
	return res.status(201).json(employees);
};

/* Updates selected Employee */
exports.updateEmployee = function(req,res){
	var updatedEmployee;
	var keys = storage.keys();
	for (var i=0; i< storage.length(); i++){
		var employee = storage.getItem(keys[i]);
		if ((employee !== undefined) && (employee['id'] === req.body['id']))
		{
		  	storage.setItemSync(keys[i],req.body);
		  	updatedEmployee = storage.getItemSync(keys[i]);
		  	break;
		}
	}
	return res.status(201).json(updatedEmployee);
};

/* Delete Selected Employee */
exports.deleteEmployee = function(req, res){
	var updatedEmployee;
	var selectedEmployeeId = req.params.id;
	var keys = storage.keys();
	for (var i=0; i< storage.length(); i++){
		var employee = storage.getItem(keys[i]);
		if ((employee !== undefined) && (employee !== null))
		{
			if (employee['id'] === selectedEmployeeId){
		  	  storage.removeItemSync(keys[i]);
		  	break;
		  	}
		}
	}
	return res.status(201).json(storage.values());
}

function handleError(res,err){
	return res.status(500).send(err);
}