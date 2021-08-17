export const DEFAULT_MESSAGE = 'Дата имеет недопустимое значение';

const getDateWithoutTime = dateString => {
  const currentDate = new Date(dateString);

  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
  );
};

export default (min, value, max) =>
  getDateWithoutTime(value) >= getDateWithoutTime(min) &&
  getDateWithoutTime(value) <= getDateWithoutTime(max)
    ? null
    : DEFAULT_MESSAGE;
