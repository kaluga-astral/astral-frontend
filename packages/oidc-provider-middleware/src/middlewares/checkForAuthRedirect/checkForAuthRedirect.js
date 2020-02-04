const { isFirstHtmlRequest } = require('../../utils/httpMethods');
const { addCorsHeaders } = require('./utils');

const { ALLOW_SUBDOMAINS } = require('../../config/server');

const checkForAuthRedirect = oidcClient => (req, res, next) => {
  if (isFirstHtmlRequest(req)) return next();

  // если есть поддержка поддоменов, то надо добавить cors headers
  if (ALLOW_SUBDOMAINS) addCorsHeaders(req, res);

  res.status(401).send({ redirectUrl: oidcClient.authorizationUrl() });
};

module.exports = checkForAuthRedirect;
