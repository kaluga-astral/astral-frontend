export default value =>
  value &&
  (/^(\d{6})$/.test(value)
    ? null
    : 'Неверный номер. Введите корректный номер.');
