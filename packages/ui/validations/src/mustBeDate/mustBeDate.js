import { isValid } from 'date-fns';
import { isString } from 'lodash-es';

export const ERROR_MESSAGE = 'Несуществующая дата';

const mustBeDate = value => {
  if (!value) {
    return null;
  }

  return isValid(isString(value) ? new Date(value) : value)
    ? null
    : ERROR_MESSAGE;
};

export default mustBeDate;
