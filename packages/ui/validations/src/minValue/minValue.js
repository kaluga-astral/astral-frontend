import { isNaN } from 'lodash-es';

export default min => value => (isNaN(value) || value >= min ? null : 'Должно быть больше чем min');
