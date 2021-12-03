export default value =>
  value && (/^(\d{6})$/.test(value) ? null : 'Некорректный код подразделения');
