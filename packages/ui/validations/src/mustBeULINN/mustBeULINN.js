const calcCheckNum = (digitsOfvalue, weights) => {
  const checkSum = digitsOfvalue.reduce((sum, digit, i) => sum + digit * weights[i], 0);
  const checkNum = checkSum % 11;

  return checkNum > 9 ? checkNum % 10 : checkNum;
};

/**
 * Проверка валидации ИНН ЮЛ на корректность
 * @param {ИНН} value
 */
const mustBeULINN = (value) => {
  if (!/^(\d{10})$/.test(value)) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  const digitsOfvalue = value
    .toString()
    .split('')
    .map(x => Number(x));

  if (
    digitsOfvalue.length === 10
    && calcCheckNum(digitsOfvalue, [2, 4, 10, 3, 5, 9, 4, 6, 8, 0]) !== digitsOfvalue[9]
  ) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  return null;
};

export default mustBeULINN;
