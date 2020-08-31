const logger = require('../../services/logger');

const { DESIRED_REFERENCE_KEY } = require('../../config/session');

const redirectToDesiredReferenceMiddleware = (req, res, next) => {
  if (!req.cookies[DESIRED_REFERENCE_KEY]) return next();

  const desiredReference = req.cookies[DESIRED_REFERENCE_KEY];

  // удаляем desiredReference
  res.clearCookie(DESIRED_REFERENCE_KEY);

  logger.info(
    req,
    `Произведен редирект на desiredReference: "${desiredReference}"`,
  );

  res.redirect(desiredReference);
};

module.exports = redirectToDesiredReferenceMiddleware;
