export const EMPTY_CITY_OR_SETTLEMENT_ERROR_MESSAGE =
  'Неверный адрес. Выберите населенный пункт';

const mustBeAddress = value => {
  if (!value.city && !value.settlement) {
    return EMPTY_CITY_OR_SETTLEMENT_ERROR_MESSAGE;
  }

  return null;
};

export default mustBeAddress;
