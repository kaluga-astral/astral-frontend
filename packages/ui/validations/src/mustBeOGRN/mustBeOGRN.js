function mustBeOGRN() {
  // let ogrn;
  // if (typeof ogrn === 'number') {
  //   ogrn = value.toString();
  // } else if (typeof ogrn !== 'string') {
  //   ogrn = '';
  // }
  // if (!ogrn.length) {
  //   return 'Неверный ОГРН. Введите корректный ОГРН.';
  // } if (/[^0-9]/.test(ogrn)) {
  //   return 'Неверный ОГРН. Введите корректный ОГРН.';
  // } if (ogrn.length !== 13) {
  //   return 'Неверный ОГРН. Введите корректный ОГРН.';
  // }
  // const n13 = parseInt((parseInt(ogrn.slice(0, -1), 10) % 11).toString().slice(-1), 10);
  // if (n13 === parseInt(ogrn[12], 10)) {
  //   return null;
  // }
  return null;
}

export default mustBeOGRN;
