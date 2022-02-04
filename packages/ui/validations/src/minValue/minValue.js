import { isNaN } from 'lodash-es';

export default min => value => {
  return isNaN(value) || value >= min ? null : 'Должно быть больше чем min';
};
