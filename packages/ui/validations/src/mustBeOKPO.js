export default value => value
  && (/^(\d{8})$/.test(value) || /^(\d{14})$/.test(value)
    ? null
    : 'ОКПО может состоять из 8 или 14 цифр. Введите корректный ОКПО.');
