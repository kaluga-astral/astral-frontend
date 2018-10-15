import { isObject, keys, merge } from 'lodash-es';

export default rules => (values) => {
  if (!isObject(rules)) {
    throw new Error('Схема валидации должна быть объектом');
  }

  return keys(rules).reduce(
    (recordLevelErrors, fieldName) => merge(
      recordLevelErrors,
      rules[fieldName]
        .map(fieldRule => fieldRule(values[fieldName]))
        .filter(error => error)
        .reduceRight((fieldLevelError, error) => ({ [fieldName]: error }), {}),
    ),
    {},
  );
};
