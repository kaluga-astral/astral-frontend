import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const TableCell = ({
  classes, className, children, ...props
}) => (
  <>
    {children && (
      <div {...props} className={cn(classes.root, className)}>
        {children}
      </div>
    )}
  </>
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
    wordBreak: 'break-all',
    display: 'flex',
    alignItems: 'center',
    minHeight: '65px',
    padding: '10px',
    [theme.breakpoints.down('xs')]: {
      minHeight: '30px',
    },
  },
}))(TableCell);
