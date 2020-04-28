const path = require('path');
const { initializeServer } = require('@astral-frontend/oidc-auth-server');

const { createMockApi } = require('./__mocks__/api');

const PROXY_MOCK_PORT = 3001;
const PROXY_URL = `http://localhost:${PROXY_MOCK_PORT}`;

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
  const { app, startServer, oidcProtectedHttpProxy } = await initializeServer({
    oidcParams: OIDC_PARAMS,
    sessionParams: SESSION_PARAMS,
    storeConnectUrl: 'http://10.0.3.9:5703',
    logoutRoutePath: '/account/logout',
    getProfileRoutePath: '/account/profile',
    // будет создан защищенный прокси для сокета
    socketProtectedProxyTarget: PROXY_URL,
    httpProtectedProxyConfigs: [
      { entry: ['/main'], target: PROXY_URL },
      { entry: ['/contacts'], target: PROXY_URL, changeOrigin: true },
    ],
    internalErrorTemplatePath: path.resolve(__dirname, 'static', 'error.html'),
  });

  // будет создан http прокси с авторзацией
  // oidcProtectedHttpProxy необходимо использовать, если необходимо сделать что то до или после этого middleware, в противном случае лучше воспользоваться декларативным методом httpProtectedProxyConfigs
  app.use('/fallback', oidcProtectedHttpProxy({ target: PROXY_URL }));

  app.use('/noAuth', (req, res) => {
    res.send({ ok: true });
  });

  startServer(3000);
};

createServer();
