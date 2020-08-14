export default value =>
  value &&
  (/^(\d{4})$/.test(value)
    ? null
    : 'Неверная серия. Введите корректную серию.');
