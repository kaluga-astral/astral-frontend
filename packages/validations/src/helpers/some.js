import { isObject, some } from 'lodash-es';

export default rules => (values) => {
  if (!isObject(rules)) {
    throw new Error('Схема валидации должна быть объектом');
  }

  let error = null;
  const hasValid = some(rules, (validators, fieldName) => some(validators, (validator) => {
    const fieldError = validator(values[fieldName]);
    if (!error) {
      error = { [fieldName]: fieldError };
    }
    return !fieldError;
  }));

  return hasValid ? null : error;
};
