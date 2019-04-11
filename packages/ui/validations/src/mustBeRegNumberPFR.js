export default value => value && (/^(\d{12})$/.test(value) ? null : 'Неверный рег. номер ПФР. Введите корректный номер.');
