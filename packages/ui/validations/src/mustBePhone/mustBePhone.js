const phoneRegExp = /^\+?7\d{10}$/;

function mustBePhone(value) {
  if (!value) {
    return null;
  }

  if (phoneRegExp.test(value)) {
    return null;
  }

  return 'Номер телефона имеет некорректный формат';
}

export default mustBePhone;
