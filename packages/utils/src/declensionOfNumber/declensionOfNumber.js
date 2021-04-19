/**
 * Функция для подбора нужного имени в зависимости от числа
 * @param {number} number число
 * @param {string[]} titles массив имен
 * @returns число с нужнем именем
 * @example
 * // returns 5 документов
 * declensionOfNumber(5, ['документ', 'документа', 'документов'])
 */
export function declensionOfNumber(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
