import { map } from 'lodash-es';
import React from 'react';
import Select from './base/Select';

const TYPES = {
  legal: {
    value: 1,
    label: 'Юридическое лицо',
  },
  private: {
    value: 2,
    label: 'Индивидуальный предприниматель',
  },
};

const OPTIONS = map(TYPES, ({ value, label }) => ({ value, label }));

const OrganizationalForm = props => <Select options={OPTIONS} {...props} />;

OrganizationalForm.TYPES = TYPES;
OrganizationalForm.OPTIONS = OPTIONS;

OrganizationalForm.defaultProps = {
  label: 'Организационно-правовая форма',
  name: 'organizationalForm',
};

export default OrganizationalForm;
