import { EMAIL_MAX_LENGTH } from '../constants';

const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,}$/;

export const DEFAULT_ERROR_MESSAGE = 'Некорректный E-mail';
export const INVALID_LENGTH_ERROR_MESSAGE = 'E-mail слишком длинный';

export const mustBeEmail = value => {
  if (!emailRegExp.test(value)) {
    return DEFAULT_ERROR_MESSAGE;
  }

  if (value.length > EMAIL_MAX_LENGTH) {
    return INVALID_LENGTH_ERROR_MESSAGE;
  }

  const [username] = value.split('@') ?? [];

  if (username.length > 64) {
    return DEFAULT_ERROR_MESSAGE;
  }

  return null;
};
