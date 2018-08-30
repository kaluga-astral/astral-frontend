import React from 'react';
import Select from './base/Select';

const options = [{ value: 10, label: '10%' }, { value: 18, label: '18%' }];

const VATRate = props => <Select options={options} {...props} />;

VATRate.defaultProps = {
  label: 'Ставка НДС',
  name: 'VATRate',
};

export default VATRate;
