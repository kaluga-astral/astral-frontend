const validator = require('@hapi/joi');

const { validateEnvVars } = require('../utils/envValidation');

const { REDIS_URL } = process.env;

const STORE_ENV_VALIDATION_SCHEME = {
  REDIS_URL: validator
    .string()
    .uri()
    .required(),
};

validateEnvVars(STORE_ENV_VALIDATION_SCHEME);

module.exports = { STORE_URL: REDIS_URL };
