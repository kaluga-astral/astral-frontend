import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import { __Context as LayoutContext } from '../Layout';
import { __Context as SidebarContext } from '../Sidebar';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      width: 'fill-available',
      margin: `0 ${theme.spacing(1)}px`,
    },
    activeToggler: {
      borderRadius: `${theme.spacing(1)}px ${theme.spacing(1)}px 0 0`,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    expandIcon: {
      flexShrink: 0,
      width: '20px',
      height: '20px',
      fill: 'currentColor',
      transition: 'transform 0.3s ease 0s',
      color: expanded =>
        expanded ? theme.palette.primary.main : theme.palette.grey[600],
      transform: expanded => (expanded ? 'rotateZ(0deg)' : 'rotateZ(180deg)'),
    },
    documentCounter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.common.white,
      flexShrink: 0,
      marginRight: `${theme.spacing(1)}px`,
      width: '20px',
      height: '20px',
      fontSize: '75%',
      fontWeight: 'bold',
      borderRadius: '50%',
      backgroundColor: theme.palette.error.main,
    },
  }),
  {
    name: 'DashboardLayoutSidebarNavDropdownToggler',
  },
);

const DashboardLayoutSidebarNavDropdownToggler = ({
  className,
  expanded,
  isCounterVisible,
  children,
  onToggle,
}) => {
  const classes = useStyles(expanded);
  const { isSidebarOpen } = React.useContext(LayoutContext);
  const { isTransitioning } = React.useContext(SidebarContext);
  const isTooglerContentVisible = !isTransitioning && isSidebarOpen;

  return (
    <ButtonBase
      className={cn(classes.root, className, {
        [classes.activeToggler]: expanded,
      })}
      onClick={onToggle}
    >
      {children}
      {isTooglerContentVisible && (
        <>
          {isCounterVisible && <div className={classes.documentCounter}>5</div>}
          <svg className={classes.expandIcon} viewBox="-4 -5 18 18">
            <path d="M11.9055 5.73684L11.7145 5.9127C11.5881 6.0291 11.3837 6.0291 11.2573 5.9127L6.00151 1.07059L0.743044 5.91269C0.616626 6.0291 0.412205 6.0291 0.285786 5.91269L0.0948139 5.73684C-0.0316045 5.62043 -0.0316045 5.4322 0.0948139 5.31579L5.77019 0.0873066C5.89661 -0.0291022 6.10103 -0.0291022 6.22745 0.0873066L11.9028 5.31579C12.0319 5.4322 12.0319 5.62044 11.9055 5.73684Z" />
          </svg>
        </>
      )}
    </ButtonBase>
  );
};

DashboardLayoutSidebarNavDropdownToggler.defaultProps = {
  className: null,
  isCounterVisible: true,
};

DashboardLayoutSidebarNavDropdownToggler.propTypes = {
  className: PropTypes.string,
  isCounterVisible: PropTypes.bool,
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default DashboardLayoutSidebarNavDropdownToggler;
