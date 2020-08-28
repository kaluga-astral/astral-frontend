const expressWinston = require('express-winston');

const { loggerConfig } = require('../config/logging');

module.exports = expressWinston.logger(loggerConfig);
