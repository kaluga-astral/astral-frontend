import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonBase } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import SidebarActionButtonIcon from './SidebarActionButtonIcon';
import SidebarActionButtonText from './SidebarActionButtonText';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      height: '65px',
      padding: `0 ${theme.spacing(5)}`,
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
);

const DashboardLayoutActionButton = React.forwardRef(
  ({ className, Icon, text, ...props }, ref) => {
    const classes = useStyles();

    return (
      <ButtonBase ref={ref} className={cn(classes.root, className)} {...props}>
        <SidebarActionButtonIcon Icon={Icon} />
        <SidebarActionButtonText text={text} />
      </ButtonBase>
    );
  },
);

DashboardLayoutActionButton.defaultProps = {
  className: null,
};

DashboardLayoutActionButton.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DashboardLayoutActionButton;
