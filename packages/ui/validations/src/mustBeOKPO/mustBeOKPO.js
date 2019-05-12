const mustBeOKPO = () => null;
// if (!/^(\d{8,10})$/.test(value)) {
//   return 'Неверный ОКПО. Введите корректный ОКПО.';
// }

export default mustBeOKPO;

// const a = [1, 2, 3, 4, 5, 6, 7, 0];
// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 0];

// const digitsOKPO = value
//   .toString()
//   .split('')
//   .map(x => Number(x));

// let checkSum;
// if (digitsOKPO.length == 8) {
//   checkSum = digitsOKPO.reduce((sum, digit, i) => sum + digit * a[i], 0);
// }

// if (digitsOKPO.length == 14) {
//   checkSum = digitsOKPO.reduce((sum, digit, i) => sum + digit * b[i], 0);
// }
// const m = digitsOKPO.pop();

// if (checkSum % 11 == 10) {
//   const a = [2, 3, 4, 5, 6, 7, 8, 0];
//   const b = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 0];

//   const digitsOKPO = value
//     .toString()
//     .split('')
//     .map(x => Number(x));

//   let checkSum;
//   if (digitsOKPO.length == 8) {
//     checkSum = digitsOKPO.reduce((sum, digit, i) => sum + digit * a[i], 0);
//   }

//   if (digitsOKPO.length == 14) {
//     checkSum = digitsOKPO.reduce((sum, digit, i) => sum + digit * b[i], 0);
//   }

//   if (checkSum % 11 == 10) {
//     checkSum = 0;
//   }
// }

// if (checkSum % 11 == m) {
//   return null;
// }
// return 'Введите корректный ОКПО.';
