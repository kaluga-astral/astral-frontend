const KPP_REGEXP = /^(\d{4}([A-Z]|\d){2}\d{3})$/;

const mustBeKPP = value => {
  if (!KPP_REGEXP.test(value)) {
    return 'Неверный КПП. Введите корректный КПП.';
  }

  return null;
};

export default mustBeKPP;
