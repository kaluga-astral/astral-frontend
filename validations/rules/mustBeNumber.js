import { isNumber } from 'lodash';

export default value => (isNumber(value) ? null : 'Должно быть числом');
