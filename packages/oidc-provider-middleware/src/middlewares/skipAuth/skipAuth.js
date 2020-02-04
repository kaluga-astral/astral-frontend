const { skipAuth } = require('../../utils/auth');

const httpProxy = require('../httpProxy');

const skipAuthMiddleware = () => (req, res, next) => {
  if (skipAuth(req)) {
    httpProxy(req, res, next);

    return;
  }

  next();
};

module.exports = skipAuthMiddleware;
