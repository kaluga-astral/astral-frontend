export const ERROR_MESSAGE = 'Некорректный номер';

export default value =>
  value && (/^(\d{6})$/.test(value) ? null : ERROR_MESSAGE);
