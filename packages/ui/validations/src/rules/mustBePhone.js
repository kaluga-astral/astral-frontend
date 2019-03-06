const phoneRegExp = /^(7)\d{10}$/;

export default value => value && (phoneRegExp.test(value) ? undefined : 'Номер телефона имеет некорректный формат');
