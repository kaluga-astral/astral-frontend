import { isString } from 'lodash-es';

function mustBePresent(value) {
  if (!value) {
    return 'Обязательно для заполнения';
  }
  if (isString(value) && !value.trim()) {
    return 'Обязательно для заполнения';
  }
  return null;
}
export default mustBePresent;
