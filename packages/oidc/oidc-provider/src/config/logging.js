const winston = require('winston');

const loggerConfig = {
  transports: [new winston.transports.Console()],
  expressFormat: true,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.simple(),
  ),
};

module.exports = { loggerConfig };
