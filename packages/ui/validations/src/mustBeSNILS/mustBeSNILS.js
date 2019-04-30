const mustBeSNILS = () => null;

// const snils = value
//   .toString()
//   .split('')
//   .map(x => Number(x));

// if (snils.length !== 11) {
//   return 'Неверный СНИЛС. Введите корректный СНИЛС.';
// }

// const b = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0];
// const checkSum = snils.reduce(
//   (sum, digit, i) => sum + (digit * (b[i])),
//   0,
// );

// let checkDigit = 0;
// if (checkSum < 100) {
//   checkDigit = checkSum;
// }
// if (checkSum === 100) {
//   checkDigit = 0;
// }
// if (checkSum > 100) {
//   checkDigit = Number(checkSum % 101);
//   if (checkDigit === 100) {
//     checkDigit = 0;
//   } else {
//     checkDigit = checkDigit;
//   }
// }

// const c = snils.slice(-2).join('');

// if (checkDigit == c) {
//   return null;
// }

export default mustBeSNILS;
