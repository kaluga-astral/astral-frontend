const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,}$/;

export const DEFAULT_ERROR_MESSAGE = 'Email имеет некорректный формат';
export const INVALID_LENGTH_ERROR_MESSAGE = 'Email слишком длинный';

export default value => {
  if (!emailRegExp.test(value)) {
    return DEFAULT_ERROR_MESSAGE;
  }

  if (value.length > 255) {
    return INVALID_LENGTH_ERROR_MESSAGE;
  }

  const [username] = value.split('@') ?? [];

  if (username.length > 64) {
    return DEFAULT_ERROR_MESSAGE;
  }

  return null;
};
