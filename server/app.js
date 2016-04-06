/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var logger = require('./config/logger');


// Connect to MongoDB


// Setup server
var app = express();
var https = require('https');
var http = require('http');
var fs = require('fs');


require('./config/express')(app);
require('./routes')(app);

var env = app.get('env');

if ('development' === env) {
  var server = http.createServer(app);
  server.listen(config.port, config.ip, function () {
    logger.info('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

// Expose app
exports = module.exports = app;
