const mustBePartnerId = value => {
  if (!value) {
    return null;
  }

  if (value < 1 || value > 2147483647) {
    return 'Неверный формат кода обслуживающей организации';
  }

  return null;
};

export default mustBePartnerId;
