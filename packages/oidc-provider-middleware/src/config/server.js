const validator = require('@hapi/joi');

const { validateEnvVars } = require('../utils/envValidation');

const {
  SERVER_PORT,
  SESSION_SECRET,
  ALLOW_SUBDOMAINS,
  ALLOW_ORIGIN,
} = process.env;

const SERVER_ENV_VALIDATION_SCHEME = {
  SERVER_PORT: validator.number().required(),
  SESSION_SECRET: validator.string().required(),
};

validateEnvVars(SERVER_ENV_VALIDATION_SCHEME);

const TOKEN_CLOCK_SKEW_PERCENT = 20;

// 5 минут
const DESIRED_REFERENCE_MAX_AGE = 300000;

const DESIRED_REFERENCE_KEY = 'desiredReference';
const SESSION_COOKIE_KEY = 'connect.sid';

module.exports = {
  SERVER_PORT,
  SESSION_SECRET,
  TOKEN_CLOCK_SKEW_PERCENT,
  DESIRED_REFERENCE_MAX_AGE,
  DESIRED_REFERENCE_KEY,
  SESSION_COOKIE_KEY,
  ALLOW_SUBDOMAINS,
  ALLOW_ORIGIN,
};
