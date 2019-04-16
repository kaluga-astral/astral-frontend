import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonBase } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutActionButton = ({
  classes, className, Icon, iconPosition, text,
}) => (
  <ButtonBase
    className={cn(classes.root, className, { [classes.rootReversed]: iconPosition === 'right' })}
  >
    {Icon && (
      <Icon className={cn(classes.icon, { [classes.iconReversed]: iconPosition === 'right' })} />
    )}
    <div className={classes.text}>{text}</div>
  </ButtonBase>
);

DashboardLayoutActionButton.defaultProps = {
  className: null,
  Icon: null,
  iconPosition: 'left',
};

DashboardLayoutActionButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  Icon: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right']),
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
    rootReversed: {
      flexDirection: 'row-reverse',
    },
    icon: {
      fontSize: '32px',
      marginRight: '15px',
    },
    iconReversed: {
      margin: 0,
      marginLeft: '15px',
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
