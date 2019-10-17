import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutActionButtonIcon = ({ classes, className, children }) => (
  // prettier-ignore
  React.cloneElement(children, { className: cn(classes.root, className) })
);

DashboardLayoutActionButtonIcon.defaultProps = {
  className: null,
};

DashboardLayoutActionButtonIcon.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
};

export default withStyles(
  theme => ({
    root: {
      fontSize: theme.typography.pxToRem(32),
      margin: '0 15px',
    },
  }),
  { name: 'DashboardLayoutActionButtonIcon' },
)(DashboardLayoutActionButtonIcon);
