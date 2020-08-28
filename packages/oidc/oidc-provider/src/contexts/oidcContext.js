const { createContext } = require('../utils/context');

const oidcContext = createContext({
  identityUrl: null,
  clientId: null,
  clientSecret: null,
  redirectUri: null,
  postLogoutRedirectUri: null,
  scope: null,
  refreshTokenMaxAge: null,
  oidcSessionKey: null,
  clientConfig: null,
});

module.exports = oidcContext;
