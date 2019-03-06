import { isNaN } from 'lodash-es';

export default (value) => {
  if (!value) return null;

  if (isNaN(Number(value))) return 'Неверный ОГРН. Введите корректный ОГРН.';

  const ogrn = value.split('');

  if (ogrn.length !== 13 && ogrn.length !== 15) return 'Неверный ОГРН. Введите корректный ОГРН.';

  const delimeter = ogrn.length === 13 ? 11 : 13;

  const checksum = ogrn.pop();
  const lastNumber = Number(ogrn.join('')) % delimeter;
  const validOgrn = lastNumber === 10 ? 0 : lastNumber;

  return `${validOgrn}` === checksum ? null : 'Неверный ОГРН. Введите корректный ОГРН.';
};
