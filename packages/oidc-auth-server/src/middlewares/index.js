const httpLogger = require('./httpLogger');
const createHttpProxy = require('./httpProxy');
const errorLogger = require('./errorLogger');
const mainErrorHandle = require('./mainErrorHandle');
const createOidcProtectedHttpProxy = require('./oidcProtectedHttpProxy');

module.exports = {
  httpLogger,
  createHttpProxy,
  errorLogger,
  mainErrorHandle,
  createOidcProtectedHttpProxy,
};
