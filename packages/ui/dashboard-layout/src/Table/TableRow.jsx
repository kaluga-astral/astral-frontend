import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const TableRow = ({ classes, className, children }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

TableRow.defaultProps = {
  children: null,
  className: null,
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(theme => ({
  root: {
    display: 'grid',
    borderBottom: '1px solid rgba(29, 63, 102, 0.09)',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    columnGap: '15px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}))(TableRow);
