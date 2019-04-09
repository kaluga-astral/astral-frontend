export default value => (/^(\d{9})$/.test(value) ? null : 'Неверный КПП. Введите корректный КПП.');
