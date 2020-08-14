export default function maxLength(length) {
  if (length <= 0) {
    throw new Error('Значение параметра `length` должно быть >= 0');
  }

  return value => {
    if (value && value.length > length) {
      return `Максимальная длина поля ${length} символов.`;
    }

    return null;
  };
}
