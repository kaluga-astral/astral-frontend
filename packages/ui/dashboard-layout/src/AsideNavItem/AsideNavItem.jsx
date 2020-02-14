import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import { Tooltip } from '@astral-frontend/components';
import { __Context as AsideContext } from '../Aside';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`,
      lineHeight: theme.typography.pxToRem(20),
      textAlign: 'left',
      textDecoration: 'none',
      color: theme.palette.grey[600],
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexShrink: 0,
      marginRight: `${theme.spacing(4)}px`,
      padding: `${theme.spacing(1)}px`,
    },
    collapsedIcon: {
      margin: 0,
      '&:hover': {
        borderRadius: `${theme.shape.borderRadius}px`,
        backgroundColor: theme.palette.primary.light,
      },
    },
    text: {
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxHeight: '20px',
    },
  }),
  {
    name: 'DashboardLayoutAsideNavItem',
  },
);

const DashboardLayoutAsideNavItem = React.forwardRef(
  (
    { className, component: Component, Icon, tooltipText, Text, ...props },
    ref,
  ) => {
    const classes = useStyles();
    const { isOpen } = React.useContext(AsideContext);
    const Item = () => (
      <Component ref={ref} className={cn(classes.root, className)} {...props}>
        {Icon && (
          <div
            className={cn(classes.icon, {
              [classes.collapsedIcon]: !isOpen,
            })}
          >
            <Icon />
          </div>
        )}
        {isOpen && <Text className={classes.text} />}
      </Component>
    );

    if (isOpen) {
      return <Item />;
    }

    return (
      <Tooltip placement="right" title={tooltipText}>
        <Item />
      </Tooltip>
    );
  },
);

DashboardLayoutAsideNavItem.defaultProps = {
  className: null,
};

DashboardLayoutAsideNavItem.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  Icon: PropTypes.func.isRequired,
  Text: PropTypes.func.isRequired,
  tooltipText: PropTypes.string.isRequired,
};

export default DashboardLayoutAsideNavItem;
