import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { Button } from '@astral-frontend/components';
import { CollapseIcon } from '@astral-frontend/icons';

import LayoutContext from '../LayoutContext';
import SidebarContext from '../SidebarContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '20px 10px 20px 20px',
      lineHeight: theme.typography.pxToRem(20),
      textAlign: 'left',
      color: theme.palette.grey[600],
      margin: '0 5px',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginRight: '5px',
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
  const toogleSidebarHandleClick = () => {
    setIsSidebarOpen(prevValue => !prevValue);
  };

  return (
    <Button
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
      {!isTransitioning && isSidebarOpen ? (
        <div className={classes.text}>Свернуть меню</div>
      ) : null}
    </Button>
  );
};

SidebarNavItemToggleButton.defaultProps = {
  className: null,
};

SidebarNavItemToggleButton.propTypes = {
  className: PropTypes.string,
};

export default SidebarNavItemToggleButton;
