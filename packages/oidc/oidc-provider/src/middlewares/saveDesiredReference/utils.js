const { isFirstHtmlRequest } = require('../../utils/httpMethods');

const {
  DESIRED_REFERENCE_MAX_AGE,
  DESIRED_REFERENCE_KEY,
} = require('../../config/session');

const logger = require('../../services/logger');

const desiredReferenceWriter = (req, res) => desiredReference => {
  logger.info(req, `В cookie записан desiredReference: "${desiredReference}"`);

  res.cookie(DESIRED_REFERENCE_KEY, desiredReference, {
    maxAge: DESIRED_REFERENCE_MAX_AGE,
    httpOnly: true,
  });
};

const saveDesiredReferenceInCookie = (req, res, fallbackReference) => {
  const writeDesiredReferenceToCookie = desiredReferenceWriter(req, res);

  // если запрашивается html, то в desiredReference записываем путь, на который шел запрос
  if (isFirstHtmlRequest(req)) {
    writeDesiredReferenceToCookie(req.originalUrl);

    return;
  }

  // не во всех запросах есть referer (например, при запросе html referer не подставляется)
  if (req.headers.referer) {
    writeDesiredReferenceToCookie(req.headers.referer);

    return;
  }

  writeDesiredReferenceToCookie(fallbackReference);
};

module.exports = { saveDesiredReferenceInCookie };
