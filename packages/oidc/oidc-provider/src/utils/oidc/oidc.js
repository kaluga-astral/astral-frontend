const { DEFAULT_OIDC_RESPONSE_TYPES } = require('../../config/oidc');

// offline_access для получения refresh_token
const generateOidcScope = additionalScopes =>
  `openid offline_access ${additionalScopes}`;

const generateOidcSessionKey = clientId => `session${clientId}`;

const getOidcClientConfig = ({
  clientId,
  clientSecret,
  redirectUri,
  postLogoutRedirectUri,
  scope,
}) => ({
  client_id: clientId,
  client_secret: clientSecret,
  redirect_uri: redirectUri,
  response_type: DEFAULT_OIDC_RESPONSE_TYPES,
  post_logout_redirect_uris: postLogoutRedirectUri,
  scope: generateOidcScope(scope),
});

module.exports = {
  generateOidcScope,
  generateOidcSessionKey,
  getOidcClientConfig,
};
