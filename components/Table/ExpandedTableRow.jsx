import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Row from './TableRow';
import Cell from './TableCell';

const ExpandedTableRow = ({ classes, colSpan, children }) => (
  <Row className={classes.row}>
    <Cell colSpan={colSpan} className={classes.cell}>
      {children}
    </Cell>
  </Row>
);

ExpandedTableRow.propTypes = {
  classes: PropTypes.shape().isRequired,
  colSpan: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  row: {
    padding: 0,
    borderLeft: '3px solid #0a90ed', // FIXME: цвета в тему
    background: 'rgba(10, 144, 237, 0.02)',
  },
  cell: {
    padding: '25px',
  },
})(ExpandedTableRow);
