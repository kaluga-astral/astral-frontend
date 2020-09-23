export default (...validators) => (...args) =>
  validators.reduce((error, validator) => error || validator(...args), null);
