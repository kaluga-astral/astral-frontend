export default (...validators) => (...args) => {
  return validators
    .filter(validator => validator)
    .reduce((error, validator) => error || validator(...args), null);
};
