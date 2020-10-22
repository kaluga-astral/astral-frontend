const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,5}$/;

export default value => {
  if (!emailRegExp.test(value)) {
    return 'Email имеет некорректный формат';
  }

  const [username] = value.split('@') ?? [];

  if (username.length > 64) {
    return 'Email имеет некорректный формат';
  }

  return null;
};
