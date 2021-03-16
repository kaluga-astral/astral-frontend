export const EMPTY_CITY_ERROR_MESSAGE =
  'Неверный адрес. Выберите населенный пункт';

const mustBeAddress = value => {
  if (!value.city) {
    return EMPTY_CITY_ERROR_MESSAGE;
  }

  return null;
};

export default mustBeAddress;
