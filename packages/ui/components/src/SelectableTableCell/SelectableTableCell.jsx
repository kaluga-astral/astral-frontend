import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import { __Context as TableRowContext } from '../TableRow';
import TableCell from '../TableCell';

import SelectableTableCellDefaultSelector from './SelectableTableCellDefaultSelector';

const useStyles = makeStyles(
  theme => ({
    root: {
      color: theme.palette.primary.main,
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '48px',
      height: '48px',
    },
  }),
  { name: 'SelectableTableCell' },
);

const SelectableTableCell = ({
  Icon, selected, renderSelector, onChange, ...props
}) => {
  const { hovered: tableRowHovered } = React.useContext(TableRowContext);
  const classes = useStyles();

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
  Icon: PropTypes.func.isRequired,
  renderSelector: PropTypes.func,
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectableTableCell;
