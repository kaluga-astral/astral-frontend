import PropTypes from 'prop-types';
import React from 'react';

import Checkbox from '../Checkbox';

const SelectableTableCellDefaultSelector = ({ selected, onChange }) => (
  <Checkbox
    checked={selected}
    color="primary"
    onClick={(e) => {
      e.stopPropagation();
    }}
    onChange={onChange}
  />
);

SelectableTableCellDefaultSelector.propTypes = {
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectableTableCellDefaultSelector;
