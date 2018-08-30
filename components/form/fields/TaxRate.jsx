import React from 'react';
import Select from './base/Select';

const OPTIONS = [
  { value: 9, label: '9%' },
  { value: 13, label: '13%' },
  { value: 15, label: '15%' },
  { value: 30, label: '30%' },
  { value: 35, label: '35%' },
];

const TaxRate = props => <Select options={OPTIONS} {...props} />;

TaxRate.OPTIONS = OPTIONS;

TaxRate.defaultProps = {
  label: 'Налоговая ставка',
  name: 'taxRate',
};

export default TaxRate;
