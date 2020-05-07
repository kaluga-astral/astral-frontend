const mustBeOKPO = value => {
  if (!/^(\d{8,11})$/.test(value)) {
    return 'Неверный ОКТМО. Введите корректный ОКТМО.';
  }

  return null;
};

export default mustBeOKPO;
