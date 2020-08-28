const validator = require('@hapi/joi');

const {
  INITIALIZE_ENTRY_PARAMS_VALIDATION_SCHEME,
} = require('../../config/validation');

const throwValidationError = errorText => {
  console.error(errorText);

  process.exit(1);
};

const validateObject = (
  validatedObject,
  validationScheme,
  errorBaseMessage,
) => {
  const { error, ...envVars } = validator
    .object(validationScheme)
    .validate(validatedObject);

  if (error) {
    throwValidationError(`${errorBaseMessage}: ${error.message}`);
  }

  return envVars;
};

const validateInitializeEntryParam = entryParams => {
  validateObject(
    entryParams,
    INITIALIZE_ENTRY_PARAMS_VALIDATION_SCHEME,
    'Ошибка во входных параметрах',
  );
};

module.exports = {
  validateObject,
  validateInitializeEntryParam,
};
