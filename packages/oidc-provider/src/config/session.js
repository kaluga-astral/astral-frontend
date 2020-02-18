const validator = require('@hapi/joi');

const SESSION_ENTRY_PARAMS_VALIDATION_SCHEME = {
  sessionSecret: validator.string().required(),
  allowSubdomains: validator.string(),
  allowOrigin: validator.string(),
};

const TOKEN_CLOCK_SKEW_PERCENT = 20;

// 5 минут
const DESIRED_REFERENCE_MAX_AGE = 300000;

const DESIRED_REFERENCE_KEY = 'desiredReference';
const SESSION_COOKIE_KEY = 'connect.sid';

module.exports = {
  SESSION_ENTRY_PARAMS_VALIDATION_SCHEME,
  TOKEN_CLOCK_SKEW_PERCENT,
  DESIRED_REFERENCE_MAX_AGE,
  DESIRED_REFERENCE_KEY,
  SESSION_COOKIE_KEY,
};
