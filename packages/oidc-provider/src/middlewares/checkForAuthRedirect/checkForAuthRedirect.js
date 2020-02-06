const { isFirstHtmlRequest } = require('../../utils/httpMethods');
const { addCorsHeaders } = require('./utils');

const checkForAuthRedirect = ({ oidcClient, sessionParams }) => (
  req,
  res,
  next,
) => {
  const { allowSubdomains, allowOrigin } = sessionParams;

  if (isFirstHtmlRequest(req)) return next();

  // если есть поддержка поддоменов, то надо добавить cors headers
  if (allowSubdomains) addCorsHeaders(res, allowOrigin);

  res.status(401).send({ redirectUrl: oidcClient.authorizationUrl() });
};

module.exports = checkForAuthRedirect;
