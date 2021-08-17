import { formatISOToView } from '@astral-frontend/utils';

const getMinErrorMessage = minDate =>
  `Дата должна быть не меньше ${formatISOToView(minDate.toISOString())}`;
const getMaxErrorMessage = maxDate =>
  `Дата должна быть не больше ${formatISOToView(maxDate.toISOString())}`;

const getDateWithoutTime = dateString => {
  const currentDate = new Date(dateString);

  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
  );
};

export default (min, value, max) => {
  if (!value) return null;

  const minDate = getDateWithoutTime(min);
  const maxDate = getDateWithoutTime(max);

  const valueDate = getDateWithoutTime(value);

  if (valueDate < minDate) {
    return getMinErrorMessage(minDate);
  }

  if (valueDate > maxDate) {
    return getMaxErrorMessage(maxDate);
  }

  return null;
};
