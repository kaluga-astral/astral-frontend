const mustBeOKTMO = value => {
  if (!/^(\d{8})$/.test(value) && !/^(\d{11})$/.test(value)) {
    return 'Неверный ОКТМО. Введите корректный ОКТМО.';
  }

  return null;
};

export default mustBeOKTMO;
