/**
 * Функция для подбора нужного имени в зависимости от числа
 * @param {number} number число
 * @param {string[]} titles массив имен [имя, когда number === 1, имя, когда number === 2, имя, когда number === 5]
 * @returns число с нужнем именем
 * @example
 * // returns 5 документов
 * declensionOfNumber(5, ['документ', 'документа', 'документов'])
 */
export function declensionOfNumber(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  const isSecondTitle = number % 100 > 4 && number % 100 < 20;
  const isRemainderLessThanFive = number % 10 < 5;

  return titles[
    isSecondTitle ? 2 : cases[isRemainderLessThanFive ? number % 10 : 5]
  ];
}
