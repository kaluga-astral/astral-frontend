const skipAuth = require('./skipAuth');
const checkForAuthRedirect = require('./checkForAuthRedirect');
const createSession = require('./createSession');
const oidcAuth = require('./oidcAuth');
const customizationRequest = require('./customizationRequest');
const refreshToken = require('./refreshToken');
const saveDesiredReference = require('./saveDesiredReference');
const redirectToDesiredReference = require('./redirectToDesiredReference');
const createOidcProtectedMiddleware = require('./oidcProtected');

module.exports = {
  skipAuth,
  checkForAuthRedirect,
  createSession,
  oidcAuth,
  customizationRequest,
  refreshToken,
  saveDesiredReference,
  redirectToDesiredReference,
  createOidcProtectedMiddleware,
};
