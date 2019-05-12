import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import ActionButton from '../ActionButton';

const DashboardLayoutContentNavAction = ({
  classes, className, title, icon: Icon,
}) => (
  <ActionButton className={cn(classes.root, className)}>
    {title && <ActionButton.Text>{title}</ActionButton.Text>}
    {Icon && (
      <ActionButton.Icon>
        <Icon />
      </ActionButton.Icon>
    )}
  </ActionButton>
);

DashboardLayoutContentNavAction.defaultProps = {
  className: null,
};

DashboardLayoutContentNavAction.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(
  () => ({
    root: {
      marginLeft: 'auto',
      height: '100%',
      justifyContent: 'center',
    },
  }),
  { name: 'DashboardLayoutContentNavAction' },
)(DashboardLayoutContentNavAction);
