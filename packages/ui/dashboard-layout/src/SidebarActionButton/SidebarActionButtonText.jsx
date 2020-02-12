import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutActionButtonText = ({ classes, className, children }) => (
  <div className={cn(classes.text, className)}>{children}</div>
);

DashboardLayoutActionButtonText.defaultProps = {
  className: null,
};

DashboardLayoutActionButtonText.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default withStyles(
  () => ({
    root: {
      textAlign: 'left',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  }),
  { name: 'DashboardLayoutActionButtonText' },
)(DashboardLayoutActionButtonText);
