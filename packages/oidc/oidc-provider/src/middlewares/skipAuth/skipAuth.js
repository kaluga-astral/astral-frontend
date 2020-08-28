const { skipAuth } = require('../../utils/auth');

const skipAuthMiddleware = prematureTermination => (req, res, next) => {
  if (skipAuth(req)) {
    prematureTermination();

    return;
  }

  next();
};

module.exports = skipAuthMiddleware;
