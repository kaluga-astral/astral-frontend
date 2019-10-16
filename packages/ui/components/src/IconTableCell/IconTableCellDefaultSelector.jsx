import PropTypes from 'prop-types';
import React from 'react';

import Checkbox from '../Checkbox';

const IconTableCellDefaultSelector = ({ selected, onChange }) => (
  <Checkbox
    checked={selected}
    onClick={(e) => {
      e.stopPropagation();
    }}
    onChange={onChange}
  />
);

IconTableCellDefaultSelector.propTypes = {
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IconTableCellDefaultSelector;
