import { isNaN } from 'lodash';

export default min => value =>
  (isNaN(value) || value >= min ? undefined : `Должно быть больше чем ${min}`);
