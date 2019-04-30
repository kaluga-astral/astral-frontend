import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutOrganizationSelectorAddButton = ({
  classes,
  className,
}) => (
  <button
    type="button"
    className={cn(classes.addingPopperContentButton, className)}
  >
    Добавить компанию
  </button>
);

DashboardLayoutOrganizationSelectorAddButton.defaultProps = {
  className: null,
};

DashboardLayoutOrganizationSelectorAddButton.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
};

export default withStyles(
  () => ({
    addingPopperContentButton: {
      color: '#6746EB',
      fontSize: '10px',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      padding: '0 0 15px 15px',
    },
  }),
  {
    name: 'DashboardLayoutOrganizationSelectorAddButton',
  },
)(DashboardLayoutOrganizationSelectorAddButton);
