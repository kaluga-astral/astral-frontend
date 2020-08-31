const { compose } = require('compose-middleware');

const createHttpProxy = require('./httpProxy');

const createOidcProtectedHttpProxy = oidcProtected => proxyParams =>
  compose([oidcProtected, createHttpProxy(proxyParams)]);

module.exports = createOidcProtectedHttpProxy;
