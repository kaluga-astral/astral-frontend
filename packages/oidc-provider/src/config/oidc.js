const validator = require('@hapi/joi');

const OIDC_ENTRY_PARAMS_VALIDATION_SCHEME = {
  identityUrl: validator
    .string()
    .uri()
    .required(),
  clientId: validator.string().required(),
  clientSecret: validator.string().required(),
  redirectUri: validator
    .string()
    .uri()
    .required(),
  postLogoutRedirectUri: validator
    .string()
    .uri()
    .required(),
  scope: validator.string().required(),
  refreshTokenMaxAge: validator.number().required(),
};

const DEFAULT_OIDC_RESPONSE_TYPES = 'code';

// секунды
const OIDC_CLOCK_SKEW = 20;

module.exports = {
  OIDC_ENTRY_PARAMS_VALIDATION_SCHEME,
  DEFAULT_OIDC_RESPONSE_TYPES,
  OIDC_CLOCK_SKEW,
};
