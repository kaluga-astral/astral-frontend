import { map } from 'lodash-es';
import React from 'react';
import Select from './base/Select';

const TYPES = {
  osn: { value: 1, label: 'ОСН' },
  usn: { value: 2, label: 'УСН' },
  envd: { value: 3, label: 'ЕНВД' },
  eshn: { value: 4, label: 'ЕСХН' },
  osnEnvd: { value: 5, label: 'ОСН+ЕНВД' },
  usnEnvd: { value: 6, label: 'УСН+ЕНВД' },
  envdEshn: { value: 7, label: 'ЕНВД+ЕСХН' },
};

const OPTIONS = map(TYPES, ({ value, label }) => ({ value, label }));

const TaxSystem = props => <Select options={OPTIONS} {...props} />;

TaxSystem.TYPES = TYPES;
TaxSystem.OPTIONS = OPTIONS;

TaxSystem.defaultProps = {
  label: 'Система налогообложения',
  name: 'taxSystem',
};

export default TaxSystem;
