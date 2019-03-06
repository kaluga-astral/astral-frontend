const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

export default value => (emailRegExp.test(value) ? undefined : 'Email имеет некорректный формат');
