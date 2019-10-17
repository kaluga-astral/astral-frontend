import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonBase } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

import Icon from './ActionButtonIcon';
import Text from './ActionButtonText';

const DashboardLayoutActionButton = ({
  classes, className, children, ...props
}) => (
  <ButtonBase className={cn(classes.root, className)} {...props}>
    {children}
  </ButtonBase>
);
DashboardLayoutActionButton.defaultProps = {
  className: null,
};

DashboardLayoutActionButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DashboardLayoutActionButton.Icon = Icon;

DashboardLayoutActionButton.Text = Text;

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      height: '65px',
      padding: '0 20px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(14),
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
