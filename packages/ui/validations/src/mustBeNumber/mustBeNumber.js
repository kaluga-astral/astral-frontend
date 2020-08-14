import { isNumber } from 'lodash-es';

export default value => (isNumber(value) ? null : 'Должно быть числом');
