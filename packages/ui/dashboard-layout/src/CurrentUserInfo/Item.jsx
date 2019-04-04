// import cn from 'classnames';
import PropTypes from 'prop-types';
// import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardSidebarProfileItem = () => null;

DashboardSidebarProfileItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles({
  root: {
    height: 'auto',
    padding: '10px 15px',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
  },
  text: {
    fontWeight: '300',
    fontSize: '15px',
  },
})(DashboardSidebarProfileItem);
