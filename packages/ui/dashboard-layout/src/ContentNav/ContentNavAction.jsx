import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import ActionButton from '../ActionButton';

const DashboardLayoutContentNavAction = ({ classes, title, icon: Icon }) => (
  <ActionButton className={classes.root}>
    {title && <ActionButton.Text>{title}</ActionButton.Text>}
    {Icon && (
      <ActionButton.Icon>
        <Icon />
      </ActionButton.Icon>
    )}
  </ActionButton>
);

DashboardLayoutContentNavAction.propTypes = {
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
