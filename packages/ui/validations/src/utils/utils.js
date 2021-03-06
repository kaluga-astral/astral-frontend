export const getArrayDigitsOfValue = value => Array.from(value, Number);

export const removeSpecialCharacters = value => value.replace(/\D/g, '');

export function calcCheckNumForINN(digitsOfvalue, weights) {
  const checkSum = digitsOfvalue.reduce(
    (sum, digit, i) => sum + digit * weights[i],
    0,
  );
  const checkNum = checkSum % 11;

  return checkNum > 9 ? checkNum % 10 : checkNum;
}

export const calcCheckSumForSNILS = digitsOfValue =>
  digitsOfValue
    .slice(0, 9)
    .split('')
    .map(Number)
    .reduce((sum, currentValue, index) => sum + currentValue * (9 - index), 0);

export const calcCheckSumForBankAccount = account => {
  const weights = [
    7,
    1,
    3,
    7,
    1,
    3,
    7,
    1,
    3,
    7,
    1,
    3,
    7,
    1,
    3,
    7,
    1,
    3,
    7,
    1,
    3,
    7,
    1,
  ];
  const checkSum = getArrayDigitsOfValue(account)
    .map((item, index) => {
      return item * weights[index];
    })
    .reduce((acc, item) => acc + item);

  return checkSum % 10 === 0;
};

export const calcCheckSumForOKPO = value => {
  const checkSumFirstIteration =
    getArrayDigitsOfValue(value.slice(0, -1)).reduce(
      (sum, currentValue, index) => sum + currentValue * (index + 1),
      0,
    ) % 11;

  if (checkSumFirstIteration === 10) {
    const weightsForSecondIteration = [3, 4, 5, 6, 7, 8, 1, 2];

    const checkSumForSecondIteration =
      getArrayDigitsOfValue(value.slice(0, -1))
        .map((item, index) => {
          return item * weightsForSecondIteration[index];
        })
        .reduce((acc, item) => acc + item) % 11;

    if (checkSumForSecondIteration === 10) {
      return 0;
    }
    return checkSumForSecondIteration;
  }
  return checkSumFirstIteration;
};
