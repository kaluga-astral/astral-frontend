const mustBeOKPO = value => {
  if (!/^(\d{8,11})$/.test(value)) {
    return 'Неверный ОКПО. Введите корректный ОКПО.';
  }

  return null;
};

export default mustBeOKPO;
