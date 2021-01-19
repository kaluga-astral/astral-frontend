const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,16}$/;

export const ERROR_MESSAGE = 'Email имеет некорректный формат';

export default value => {
  if (!emailRegExp.test(value)) {
    return ERROR_MESSAGE;
  }

  const [username] = value.split('@') ?? [];

  if (username.length > 64) {
    return ERROR_MESSAGE;
  }

  return null;
};
