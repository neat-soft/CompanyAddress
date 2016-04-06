/**
 * Created by mirko on 24.9.15..
 */
var Winston           = require('winston'); // For logging

// Setup logging to file and console
var logger = new (Winston.Logger)({
  transports: [
    new (Winston.transports.Console)({
      colorize: true,
      level: 'debug',
      handleExceptions: true,
      timestamp: true
    }),
    new (Winston.transports.File)({
      level: 'info',
      timestamp: true,
      filename: 'server/logs/server.log',
      json: false
    })
  ]
});

module.exports = logger;
