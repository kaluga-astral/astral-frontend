export default (...validators) => value => {
  return validators
    .filter(validator => validator)
    .reduce((error, validator) => error || validator(value), null);
};
