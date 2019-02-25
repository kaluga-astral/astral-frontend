export default value => value
  && (/^(\d{10})$/.test(value) || /^(\d{15})$/.test(value)
    ? null
    : 'Неверный рег. номер ФСС. Введите корректный номер.');
