function mustBePhone(value, allowAllNumbers = false) {
  if (!value) {
    return null;
  }

  if (allowAllNumbers) {
    if (/^\+?7\d{10}$/.test(value)) {
      return null;
    }

    return 'Телефон должен начинаться с +7 (***) *** ** - **';
  }

  if (/^\+?79\d{9}$/.test(value)) {
    return null;
  }

  return 'Телефон должен начинаться с +7 (9**) *** ** - **';
}

export default mustBePhone;
