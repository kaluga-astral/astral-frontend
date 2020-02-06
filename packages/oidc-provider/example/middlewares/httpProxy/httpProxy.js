const httpProxy = require('http-proxy-middleware');

const options = {
  target: 'http://localhost:3001',
  ws: true,
  logLevel: 'debug',
};

const httpProxyMiddleware = httpProxy(options);

module.exports = httpProxyMiddleware;
