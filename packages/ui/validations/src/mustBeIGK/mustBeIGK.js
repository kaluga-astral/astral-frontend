const mustBeINN = value => {
  if (!/^(\d{20,25})$/.test(value)) {
    return 'Неверный идентификатор гос. контракта. Введите корректный ИГК.';
  }

  return null;
};

export default mustBeINN;
