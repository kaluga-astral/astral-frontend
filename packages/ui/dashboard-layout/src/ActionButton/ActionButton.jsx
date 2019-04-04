import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonBase } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutActionButton = ({
  classes, className, Icon, text,
}) => (
  <ButtonBase className={cn(classes.root, className)}>
    {Icon && <Icon className={classes.icon} />}
    <div className={classes.text}>{text}</div>
  </ButtonBase>
);

DashboardLayoutActionButton.defaultProps = {
  className: null,
  Icon: null,
};

DashboardLayoutActionButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  Icon: PropTypes.func,
  text: PropTypes.string.isRequired,
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
    },
    icon: {
      fontSize: '32px',
      marginRight: '15px',
    },
    text: {
      textAlign: 'left',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  }),
  { name: 'DashboardLayoutActionButton' },
)(DashboardLayoutActionButton);
