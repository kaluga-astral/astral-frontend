function calcCheckNum(digitsOfINN, weights) {
  const checkSum = digitsOfINN.reduce(
    (sum, digit, i) => sum + digit * weights[i],
    0,
  );
  const checkNum = checkSum % 11;

  return checkNum > 9 ? checkNum % 10 : checkNum;
}

/**
 * Проверка ИНН на валидность
 * @param {ИНН} value
 */
export default (value) => {
  if (Number(value) === 0) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  if (!/^(\d{10,12})$/.test(value)) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  const digitsOfINN = value
    .toString()
    .split('')
    .map(x => Number(x));

  if (
    digitsOfINN.length === 10
    && calcCheckNum(digitsOfINN, [2, 4, 10, 3, 5, 9, 4, 6, 8, 0])
      !== digitsOfINN[9]
  ) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  if (
    digitsOfINN.length === 12
    && calcCheckNum(digitsOfINN, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0])
      !== digitsOfINN[10]
    && calcCheckNum(digitsOfINN, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0])
      !== digitsOfINN[11]
  ) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  return null;
};
