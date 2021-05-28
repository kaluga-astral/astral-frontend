const phoneRegExp = /^\+?79\d{9}$/;

function mustBeMobilePhone(value) {
  if (!value) {
    return null;
  }

  if (phoneRegExp.test(value)) {
    return null;
  }

  return 'Телефон должен начинаться с +7 (9**) *** ** - **';
}

export default mustBeMobilePhone;
