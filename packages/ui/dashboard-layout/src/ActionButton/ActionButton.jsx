import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonBase } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      height: '65px',
      padding: `0 ${theme.spacing(5)}px`,
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
  ({ className, children, ...props }, ref) => {
    const classes = useStyles();

    return (
      <ButtonBase ref={ref} className={cn(classes.root, className)} {...props}>
        {children}
      </ButtonBase>
    );
  },
);

DashboardLayoutActionButton.defaultProps = {
  className: null,
};

DashboardLayoutActionButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutActionButton;
