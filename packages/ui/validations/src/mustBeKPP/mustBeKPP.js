const KPP_REGEXP = /^(\d{4}([A-Z]|\d){2}\d{3})$/;

export const ERROR_MESSAGE = 'Некорректный КПП';

const mustBeKPP = value => {
  if (!KPP_REGEXP.test(value)) {
    return ERROR_MESSAGE;
  }

  return null;
};

export default mustBeKPP;
