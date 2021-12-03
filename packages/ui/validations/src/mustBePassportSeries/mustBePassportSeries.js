export const ERROR_MESSAGE = 'Некорректная серия';

export default value =>
  value && (/^(\d{4})$/.test(value) ? null : ERROR_MESSAGE);
