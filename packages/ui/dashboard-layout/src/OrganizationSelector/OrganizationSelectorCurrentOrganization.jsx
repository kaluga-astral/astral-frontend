import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, ButtonBase, Skeleton } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';
import { ArrowIcon } from '@astral-frontend/icons';

const useStyles = makeStyles(
  theme => ({
    root: {
      maxWidth: '300px',
      height: '100%',
    },
    name: {
      flexGrow: 1,
      margin: theme.spacing(0, 2),
      fontSize: theme.typography.pxToRem(14),
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textAlign: 'right',
      color: ({ name }) =>
        name ? theme.palette.common.black : theme.palette.primary.main,
    },
    arrow: {
      width: '12px',
      height: '6px',
      color: ({ name }) =>
        name ? theme.palette.common.black : theme.palette.primary.main,
      transform: ({ open }) => {
        return open ? 'rotateZ(180deg)' : ' rotateZ(0deg)';
      },
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
  { name: 'DashboardLayoutOrganizationSelectorCurrentOrganization' },
);

const DashboardLayoutOrganizationSelectorCurrentOrganization = React.forwardRef(
  (props, ref) => {
    const { className, name, open, ...rest } = props;
    const classes = useStyles({ name, open });
    const location = useLocation();
    const defaultSelectorState =
      location.pathname === '/' ? (
        'Выберете организацию'
      ) : (
        <Skeleton variant="text" width={160} />
      );

    return (
      <Box
        component={ButtonBase}
        ref={ref}
        className={cn(classes.root, className)}
        {...rest}
      >
        <Box className={classes.name}>{name ?? defaultSelectorState}</Box>
        <ArrowIcon className={classes.arrow} />
      </Box>
    );
  },
);

DashboardLayoutOrganizationSelectorCurrentOrganization.defaultProps = {
  className: null,
  name: null,
};

DashboardLayoutOrganizationSelectorCurrentOrganization.propTypes = {
  className: PropTypes.string,
  name: PropTypes.node,
  open: PropTypes.bool.isRequired,
};

export default DashboardLayoutOrganizationSelectorCurrentOrganization;
