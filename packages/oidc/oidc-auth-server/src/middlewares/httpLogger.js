const winston = require('winston');
const expressWinston = require('express-winston');

const headersLogFilter = ({ headers }) => {
  const { Authorization, ...logHeaders } = headers;

  return logHeaders;
};

const reqLogFilter = (req, propName) => {
  if (propName === 'headers') return headersLogFilter(req);

  return req[propName];
};

module.exports = expressWinston.logger({
  transports: [new winston.transports.Console()],
  requestFilter: reqLogFilter,
  expressFormat: true,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.simple(),
  ),
});
