const { createProxyMiddleware } = require('http-proxy-middleware');

const oidcProtectedSocketProxyCreator = (
  server,
  socketConnectOidcProtected,
) => proxyParams => {
  const socketProxy = createProxyMiddleware({
    ...proxyParams,
    logLevel: 'debug',
    ws: true,
  });

  server.on('upgrade', socketConnectOidcProtected(socketProxy.upgrade));
};

module.exports = oidcProtectedSocketProxyCreator;
