'use strict';
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
    shortId = require('shortid');	
var EmployeeSchema = new Schema({
	id: {
		type: String,
		unique: true,
		'default': shortId.generate
	},
	first_name: String,
	last_name: String,
	email: String,
	company: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);