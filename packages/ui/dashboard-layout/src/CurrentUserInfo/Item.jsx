import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DashboardSidebarProfileItem = ({
  classes, className, Icon, text, ...props
}) => (
  <MenuItem className={cn(classes.root, className)} {...props}>
    <div className={classes.icon}>
      <Icon />
    </div>
    <div className={classes.text}>{text}</div>
  </MenuItem>
);

DashboardSidebarProfileItem.defaultProps = {
  className: null,
};

DashboardSidebarProfileItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
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
