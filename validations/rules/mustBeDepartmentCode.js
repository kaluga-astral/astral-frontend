export default value => value && (/^(\d{6})$/.test(value) ? null : 'Неверный код подразделения. Введите корректный код подразделения.');
