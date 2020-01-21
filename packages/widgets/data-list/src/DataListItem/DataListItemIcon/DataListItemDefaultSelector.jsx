import PropTypes from 'prop-types';
import React from 'react';
import { Checkbox } from '@astral-frontend/components';

const DataListItemDefaultSelector = ({ selected, onChange }) => (
  <Checkbox
    checked={selected}
    onClick={e => {
      e.stopPropagation();
    }}
    onChange={onChange}
  />
);

DataListItemDefaultSelector.propTypes = {
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DataListItemDefaultSelector;
