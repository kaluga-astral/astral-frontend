export default value => value && (/^(\d{11})$/.test(value) ? null : 'Неверный СНИЛС. Введите корректный СНИЛС.');
