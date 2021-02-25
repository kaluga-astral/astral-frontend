import {
  mustBePresent,
  composeValidations,
} from '@astral-frontend/validations';

// eslint-disable-next-line import/prefer-default-export
export const createValidationFunction = (required, validate) => {
  if (required && validate) {
    return composeValidations(mustBePresent, validate);
  }

  if (required && !validate) {
    return mustBePresent;
  }

  if (!required && validate) {
    return composeValidations((value, ...args) => {
      if (value) {
        return validate(value, ...args);
      }

      return null;
    });
  }

  return null;
};

export const removeSpecialSymbols = value => value.replace(/[^\d\s]/g, '');
