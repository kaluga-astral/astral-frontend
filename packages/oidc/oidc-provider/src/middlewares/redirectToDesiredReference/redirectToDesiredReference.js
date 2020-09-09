const logger = require('../../services/logger');

const { DESIRED_REFERENCE_KEY } = require('../../config/session');

const redirectToDesiredReferenceMiddleware = desiredReference => (
  req,
  res,
  next,
) => {
  if (!desiredReference) return next();

  // удаляем desiredReference из браузера
  res.clearCookie(DESIRED_REFERENCE_KEY);

  logger.info(
    req,
    `Произведен редирект на desiredReference: "${desiredReference}"`,
  );

  res.redirect(desiredReference);
};

module.exports = redirectToDesiredReferenceMiddleware;
