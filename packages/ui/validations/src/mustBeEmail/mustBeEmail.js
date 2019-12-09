const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

export default value =>
  emailRegExp.test(value) ? null : 'Email имеет некорректный формат';
