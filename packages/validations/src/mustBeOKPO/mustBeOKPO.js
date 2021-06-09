import { calcCheckSumForOKPO } from '../utils/utils';

const mustBeOKPO = value => {
  if (!/^(\d{8})$/.test(value) && !/^(\d{10})$/.test(value)) {
    return 'Неверный ОКПО. Введите корректный ОКПО.';
  }
  const checkNumForOKPO = Number(value.slice(-1));

  if (checkNumForOKPO !== calcCheckSumForOKPO(value)) {
    return 'Неверный ОКПО. Введите корректный ОКПО.';
  }

  return null;
};

export default mustBeOKPO;
