import { isString } from 'lodash-es';

function mustBePresent(value) {
  if (isString(value) && !value?.trim()) {
    return 'Обязательно для заполнения';
  }
  return null;
}
export default mustBePresent;
