import { isNaN } from 'lodash-es';

export default min =>
  function(value) {
    return isNaN(value) || value >= min ? null : 'Должно быть больше чем min';
  };
