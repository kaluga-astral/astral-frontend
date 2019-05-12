import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import Action from '../ContentNav/ContentNavAction';
import Item from './ContentNavFiltersItem';

const DashboardLayoutContentNavFilters = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

DashboardLayoutContentNavFilters.Action = Action;
DashboardLayoutContentNavFilters.Item = Item;

DashboardLayoutContentNavFilters.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      height: '100%',
      marginLeft: '34px',
      '&>*': {
        marginRight: '40px',
      },
    },
  }),
  { name: 'DashboardLayoutContentNavFilters' },
)(DashboardLayoutContentNavFilters);
