const winston = require('winston');

const headersLogFilter = ({ headers }) => {
  const { Authorization, ...logHeaders } = headers;

  return logHeaders;
};

const reqLogFilter = (req, propName) => {
  if (propName === 'headers') return headersLogFilter(req);

  return req[propName];
};

const loggerConfig = {
  transports: [new winston.transports.Console()],
  requestFilter: reqLogFilter,
  expressFormat: true,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.simple(),
  ),
};

module.exports = { loggerConfig };
