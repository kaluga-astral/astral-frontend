export default (min, value, max) => (
  new Date(value) >= new Date(min) && new Date(value) <= new Date(max)
    ? null
    : 'Дата имеет недопустимое значение'
);
