const phoneRegExp = /^\+?79(\d{9})$/;

function mustBePhone(value) {
  if (phoneRegExp.test(value)) {
    return null;
  }

  return 'Номер телефона имеет некорректный формат';
}
export default mustBePhone;
