import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const DashboardHeader = ({ classes, className, children }) => (
  <header className={cn(classes.root, className)}>{children}</header>
);

DashboardHeader.defaultProps = {
  className: null,
};

DashboardHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '70px',
    borderBottom: '0.5px solid rgba(255, 255, 255, 0.5)',
    background: theme.palette.common.white,
    zIndex: 2,
  },
}))(DashboardHeader);
