import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@astral-frontend/styles';

import { TableRowContext } from '../TableRow';
import TableCell from '../TableCell';

import SelectableTableCellDefaultSelector from './SelectableTableCellDefaultSelector';

const SelectableTableCell = ({
  Icon, selected, renderSelector, onChange, classes, ...props
}) => {
  const { hovered: tableRowHovered } = React.useContext(TableRowContext);

  return (
    <TableCell padding="checkbox" className={classes.root} {...props}>
      <div className={classes.wrapper}>
        {tableRowHovered || selected ? renderSelector({ selected, onChange }) : <Icon />}
      </div>
    </TableCell>
  );
};

SelectableTableCell.defaultProps = {
  renderSelector: SelectableTableCellDefaultSelector,
};

SelectableTableCell.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  Icon: PropTypes.func.isRequired,
  renderSelector: PropTypes.func,
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(() => ({
  root: {},
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '48px',
    height: '48px',
  },
}))(SelectableTableCell);
