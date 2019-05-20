/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React from 'react';

import TableCell from '../TableCell';
import Checkbox from '../Checkbox';
import { TableRowContext } from '../TableRow';

const SelectableTableCell = ({
  Icon, Selector, onSelect, selected, ...props
}) => {
  const hoveredContext = React.useContext(TableRowContext);
  return (
    <TableCell {...props}>
      {(hoveredContext.hovered || selected) && onSelect ? (
        Selector ? (
          <Selector onClick={onSelect} />
        ) : (
          <Checkbox onClick={onSelect} />
        )
      ) : (
        <Icon />
      )}
    </TableCell>
  );
};

SelectableTableCell.defaultProps = {
  Icon: null,
  Selector: null,
  onSelect: null,
  selected: false,
};

SelectableTableCell.propTypes = {
  Icon: PropTypes.func,
  Selector: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool,
};

export default SelectableTableCell;
