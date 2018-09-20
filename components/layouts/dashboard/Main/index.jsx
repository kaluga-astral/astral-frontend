import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const DashboardMain = ({ classes, className, children }) => (
  <main className={cn(classes.root, className)}>{children}</main>
);

DashboardMain.defaultProps = {
  className: null,
};

DashboardMain.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    zIndex: 1,
  },
})(DashboardMain);
