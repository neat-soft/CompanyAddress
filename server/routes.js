/**
 * Main application routes
 */

'use strict';

var path = require('path');
var raven = require('raven');

module.exports = function (app) {

  // Insert routes below
 app.use('/api/employee', require('./api/employee'));

  // The error handler must be before any other error middleware

  // All undefined asset or api routes should return a 404

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function (req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
