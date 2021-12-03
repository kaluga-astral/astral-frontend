const BIK_REGEXP = /^(\d{9})$/;

export const ERROR_MESSAGE = 'Некорректный БИК';

const mustBeBIK = value => {
  if (!BIK_REGEXP.test(value)) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeBIK;
