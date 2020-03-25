const { DESIRED_REFERENCE_KEY } = require('../../config/session');

const redirectToDesiredReferenceMiddleware = (req, res, next) => {
  if (!req.cookies[DESIRED_REFERENCE_KEY]) return next();

  // удаляем desiredReference
  res.clearCookie(DESIRED_REFERENCE_KEY);

  res.redirect(req.cookies[DESIRED_REFERENCE_KEY]);
};

module.exports = redirectToDesiredReferenceMiddleware;
