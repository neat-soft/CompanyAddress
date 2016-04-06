/**
 * Created by mirko on 25.4.15..
 */
'use strict';

var _ = require('lodash'),
  config = require('./environment');

module.exports = function () {
  return function (req, res, next) {
    if (_.includes(config.allowed_origins, req.get('origin'))) {
      res.header('Access-Control-Allow-Origin', req.get('origin'));
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    }
    return next();
  }
};
