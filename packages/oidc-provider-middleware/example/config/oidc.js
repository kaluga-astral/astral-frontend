const OIDC_PARAMS = {
  identityUrl: 'https://identity.astral-dev.ru',
  clientId: 'local_code_flow',
  clientSecret: 'secret',
  redirectUris: ['http://localhost:3000'],
  postLogoutRedirectUris: ['http://localhost:3000'],
  scope: 'profile',
  refreshTokenMaxAge: 600,
};

module.exports = { OIDC_PARAMS };
