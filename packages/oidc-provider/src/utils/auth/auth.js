const { isOptionsMethod } = require('../httpMethods');

const skipAuth = req => isOptionsMethod(req);

const skipIfAuthorized = middleware => (req, res, next) => {
  if (req.isAuthenticated()) return next();

  return middleware(req, res, next);
};

module.exports = { skipAuth, skipIfAuthorized };
