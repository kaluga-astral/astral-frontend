// TODO: https://github.com/final-form/final-form/issues/145
export default value =>
  value && (/^(\d{9})$/.test(value) ? null : 'Неверный КПП. Введите корректный КПП.');
