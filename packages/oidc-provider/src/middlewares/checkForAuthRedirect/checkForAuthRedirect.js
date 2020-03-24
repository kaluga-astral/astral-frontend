const { isFirstHtmlRequest } = require('../../utils/httpMethods');
const { addCorsHeaders } = require('./utils');

const { serviceContext, sessionContext } = require('../../contexts');

const checkForAuthRedirectMiddleware = () => (req, res, next) => {
  const { oidcClient } = serviceContext.data;
  const { allowSubdomains, allowOrigin } = sessionContext.data;

  if (isFirstHtmlRequest(req)) return next();

  // если есть поддержка поддоменов, то надо добавить cors headers
  if (allowSubdomains) addCorsHeaders(res, allowOrigin);

  res.status(401).send({ redirectUrl: oidcClient.authorizationUrl() });
};

module.exports = checkForAuthRedirectMiddleware;
