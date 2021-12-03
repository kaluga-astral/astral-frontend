const phoneRegExp = /^\+?7\d{10}$/;

function mustBePhone(value) {
  if (!value) {
    return null;
  }

  if (phoneRegExp.test(value)) {
    return null;
  }

  return 'Некорректный телефон';
}

export default mustBePhone;
