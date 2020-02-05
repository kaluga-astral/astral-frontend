const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const { createMockApi } = require('./__mocks__/api');

const { initializeOidcProvider } = require('../src');

const PROXY_MOCK_PORT = 3001;

const OIDC_PARAMS = {
  identityUrl: 'https://identity.astral-dev.ru',
  clientId: 'local_code_flow',
  clientSecret: 'secret',
  redirectUris: ['http://localhost:3000'],
  postLogoutRedirectUris: ['http://localhost:3000'],
  scope: 'profile',
  refreshTokenMaxAge: 600,
};

const SESSION_PARAMS = {
  sessionSecret: 'sessionSecret',
};

// для тестов
createMockApi(PROXY_MOCK_PORT);

const initializeServer = async () => {
  const app = express();

  await initializeOidcProvider({
    app,
    oidcParams: OIDC_PARAMS,
    sessionParams: SESSION_PARAMS,
  });
};

module.exports = { initializeServer };
