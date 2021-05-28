const BIK_REGEXP = /^(\d{9})$/;

const mustBeBIK = value => {
  if (!BIK_REGEXP.test(value)) {
    return 'Неверный БИК. Введите корректный БИК.';
  }

  return null;
};

export default mustBeBIK;
