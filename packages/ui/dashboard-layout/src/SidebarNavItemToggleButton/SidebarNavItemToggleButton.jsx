import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { ButtonBase } from '@astral-frontend/components';
import { CollapseIcon } from '@astral-frontend/icons';

import { __Context as LayoutContext } from '../Layout';
import { __Context as SidebarContext } from '../Sidebar';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: `${theme.spacing(5)}px ${theme.spacing(3)}px ${theme.spacing(
        5,
      )}px ${theme.spacing(5)}px`,
      lineHeight: theme.typography.pxToRem(20),
      textAlign: 'left',
      color: theme.palette.grey[600],
      margin: `0 ${theme.spacing(1)}px`,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginRight: `${theme.spacing(1)}px`,
      transition: 'transform 0.3s',
    },
    collapsedIcon: {
      margin: 0,
      transform: 'rotate(180deg)',
      transition: 'transform 0.3s',
      '&:hover': {
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.light,
      },
    },
    text: {
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxHeight: '20px',
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  {
    name: 'SidebarNavItemToggleButton',
  },
);

const SidebarNavItemToggleButton = ({ className }) => {
  const classes = useStyles();
  const { isSidebarOpen, setIsSidebarOpen } = React.useContext(LayoutContext);
  const { isTransitioning } = React.useContext(SidebarContext);
  const isToggleButtonTextVisible = isSidebarOpen && !isTransitioning;

  const toogleSidebarHandleClick = () => {
    setIsSidebarOpen(prevValue => !prevValue);
  };

  return (
    <ButtonBase
      onClick={toogleSidebarHandleClick}
      className={cn(classes.root, className)}
    >
      <div
        className={cn(classes.icon, {
          [classes.collapsedIcon]: !isSidebarOpen,
        })}
      >
        <CollapseIcon />
      </div>
      {isToggleButtonTextVisible && (
        <div className={classes.text}>Свернуть меню</div>
      )}
    </ButtonBase>
  );
};

SidebarNavItemToggleButton.defaultProps = {
  className: null,
};

SidebarNavItemToggleButton.propTypes = {
  className: PropTypes.string,
};

export default SidebarNavItemToggleButton;
