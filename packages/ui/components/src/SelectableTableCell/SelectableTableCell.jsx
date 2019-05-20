import PropTypes from 'prop-types';
import React from 'react';

import { CheckedCircleIcon, UncheckedCircleIcon } from '@astral-frontend/icons';

import TableCell from '../TableCell';
import Checkbox from '../Checkbox';
import { TableRowContext } from '../TableRow';

const SelectableTableCell = ({
  Icon, Selector, onSelect, selected, ...props
}) => {
  const hoveredContext = React.useContext(TableRowContext);

  const renderSelector = () => {
    if (Selector) {
      return <Selector onClick={onSelect} />;
    }

    return (
      <Checkbox
        icon={<UncheckedCircleIcon />}
        checkedIcon={<CheckedCircleIcon />}
        color="primary"
        onClick={onSelect}
      />
    );
  };

  return (
    <TableCell {...props}>
      {(hoveredContext.hovered || selected) && onSelect ? renderSelector() : <Icon />}
    </TableCell>
  );
};

SelectableTableCell.defaultProps = {
  onSelect: null,
  Selector: null,
  selected: false,
};

SelectableTableCell.propTypes = {
  Icon: PropTypes.func.isRequired,
  Selector: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
};

export default SelectableTableCell;
