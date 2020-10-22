const emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,5}$/;
const domenZoneRegExp = /\.\w$/;

export default value => {
  if (!emailRegExp.test(value)) {
    return 'Email имеет некорректный формат';
  }

  const [username] = value.split('@') ?? [];
  const [domenZone = ''] = value.match(domenZoneRegExp) ?? [];

  if (username.length > 64 || domenZone.length > 5) {
    return 'Email имеет некорректный формат';
  }

  return null;
};
