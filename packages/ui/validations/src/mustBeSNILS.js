const SNILS_REGEXP = /^(\d{3})-(\d{3})-(\d{3})\s(\d{2})$/;

const mustBeSNILS = value => value && (SNILS_REGEXP.test(value) ? null : 'Неверный СНИЛС. Введите корректный СНИЛС.');

export default mustBeSNILS;
