'use strict';

var express = require('express');
var controller = require('./employee.controller');
var router = express.Router();

router.post('/addEmployee', controller.addEmployee);
router.get('/getEmployee', controller.getEmployee);
router.post('/updateEmployee', controller.updateEmployee);
router.delete('/:id', controller.deleteEmployee);
module.exports = router;