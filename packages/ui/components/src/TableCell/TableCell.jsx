import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const TableCell = ({
  classes, className, children, ...props
}) => (
  <div {...props} className={cn(classes.root, className)}>
    {children}
  </div>
);

TableCell.defaultProps = {
  children: null,
  className: null,
};

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 0',
    wordBreak: 'break-all',
    [theme.breakpoints.down('xs')]: {
      padding: '5px 0',
    },
  },
}))(TableCell);
