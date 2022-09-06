import { isNumber } from 'lodash-es';

export default value => (isNumber(value) ? null : 'Допустимы только цифры');
