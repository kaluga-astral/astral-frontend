const { DESIRED_REFERENCE_KEY } = require('../../config/server');

const redirectToDesiredReferenceMiddleware = () => (req, res, next) => {
  if (!req.cookies[DESIRED_REFERENCE_KEY]) return next();

  // удаляем desiredReference
  res.clearCookie(DESIRED_REFERENCE_KEY);

  res.redirect(req.cookies.desiredReference);
};

module.exports = redirectToDesiredReferenceMiddleware;
