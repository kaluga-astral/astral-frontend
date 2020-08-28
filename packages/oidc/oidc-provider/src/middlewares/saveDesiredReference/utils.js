const { isFirstHtmlRequest } = require('../../utils/httpMethods');

const {
  DESIRED_REFERENCE_MAX_AGE,
  DESIRED_REFERENCE_KEY,
} = require('../../config/session');

const desiredReferenceWriter = res => desiredReference => {
  res.cookie(DESIRED_REFERENCE_KEY, desiredReference, {
    maxAge: DESIRED_REFERENCE_MAX_AGE,
  });
};

const saveDesiredReferenceInCookie = (req, res, fallbackReference) => {
  const writeDesiredReferenceToCookie = desiredReferenceWriter(res);

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
