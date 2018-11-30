// import PropTypes from 'prop-types';
import React from 'react';
import MuiTableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const TableRow = props => <MuiTableRow {...props} />;

TableRow.defaultProps = {};

TableRow.propTypes = {};

export default withStyles(
  {
    root: {
      '&$hover:hover': {
        background: 'rgba(10, 144, 237, 0.05)',
      },
    },
    hover: {},
  },
  { name: 'TableRow' },
)(TableRow);
