function calcCheckNum(digitsOfvalue, weights) {
  const checkSum = digitsOfvalue.reduce(
    (sum, digit, i) => sum + digit * weights[i],
    0,
  );
  // let checkSum = 0;
  // digitsOfvalue.forEach((el, i) => {
  //   checkSum += el * weights[i];
  //   console.log(el, weights[i], i, checkSum);
  // });
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

  const digitsOfvalue = value
    .toString()
    .split('')

    .map(x => Number(x));

  if (
    digitsOfvalue.length === 10
    && calcCheckNum(digitsOfvalue, [2, 4, 10, 3, 5, 9, 4, 6, 8, 0])
      !== digitsOfvalue[9]
  ) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  if (
    digitsOfvalue.length === 12
    && (calcCheckNum(digitsOfvalue, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0, 0])
      !== digitsOfvalue[10]
      || calcCheckNum(digitsOfvalue, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0])
        !== digitsOfvalue[11])
  ) {
    return 'Неверный ИНН. Введите корректный ИНН.';
  }

  return null;
};
