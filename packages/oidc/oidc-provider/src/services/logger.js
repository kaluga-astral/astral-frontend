const winston = require('winston');

const { loggerConfig } = require('../config/logging');

const originalLogger = winston.createLogger(loggerConfig);

const createReqLogString = (req, message) =>
  `${req.method} ${req.referer || req.originalUrl}: ${message}`;

const logReq = loggerFunc => (req, message) =>
  loggerFunc(createReqLogString(req, message));

// сделано для однотианого отображения логов
const logger = new Proxy(originalLogger, {
  get(target, prop) {
    if (prop === 'info') return logReq(target[prop]);
    if (prop === 'error') return logReq(target[prop]);

    return target[prop];
  },
});

module.exports = logger;
