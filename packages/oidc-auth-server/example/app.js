const path = require('path');
const { initializeServer } = require('@astral-frontend/oidc-auth-server');

const { createMockApi } = require('./__mocks__/api');

const PROXY_MOCK_PORT = 3001;
const PROXY_URL = `localhost:${PROXY_MOCK_PORT}`;

const OIDC_PARAMS = {
  identityUrl: 'https://identity.demo.astral-dev.ru',
  clientId: 'example_code_flow',
  clientSecret: 'secret',
  redirectUri: 'http://localhost:3000/auth/cb',
  postLogoutRedirectUri: 'http://localhost:3000',
  scope: 'profile email',
  refreshTokenMaxAge: 2592000,
};

const SESSION_PARAMS = {
  sessionSecret: 'sessionSecret',
};

// для тестов
createMockApi(PROXY_MOCK_PORT);

const createServer = async () => {
  const {
    app,
    startServer,
    createOidcProtectedSocketProxy,
    oidcProtectedHttpProxy,
  } = await initializeServer({
    oidcParams: OIDC_PARAMS,
    sessionParams: SESSION_PARAMS,
    storeConnectUrl: 'http://10.0.3.9:5703',
    logoutRoutePath: '/account/logout',
    getProfileRoutePath: '/account/profile',
    internalErrorTemplatePath: path.resolve(__dirname, 'static', 'error.html'),
  });

  // будет создан proxy с авторизацей для сокетов на PROXY_URL
  createOidcProtectedSocketProxy({ target: PROXY_URL });

  // будет создан http прокси с авторзацией
  app.use('/main', oidcProtectedHttpProxy({ target: PROXY_URL }));

  app.use('/noAuth', (req, res) => {
    res.send({ ok: true });
  });

  startServer(3000);
};

createServer();
