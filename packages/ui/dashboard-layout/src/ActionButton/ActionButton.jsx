import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonBase } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

import Icon from './ActionButtonIcon';
import Text from './ActionButtonText';

const DashboardLayoutActionButton = ({ classes, className, children }) => (
  <ButtonBase className={cn(classes.root, className)}>{children}</ButtonBase>
);

DashboardLayoutActionButton.Icon = Icon;
DashboardLayoutActionButton.Text = Text;

DashboardLayoutActionButton.defaultProps = {
  className: null,
};

DashboardLayoutActionButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      width: '260px',
      height: '65px',
      padding: '10px 20px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: '14px',
      justifyContent: 'flex-start',
      '&>:first-child': {
        marginLeft: 0,
      },
      '&>:nth-child(2)': {
        marginRight: 0,
      },
    },
  }),
  { name: 'DashboardLayoutActionButton' },
)(DashboardLayoutActionButton);
