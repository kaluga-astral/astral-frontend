import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { makeStyles } from '@astral-frontend/styles';

import SidebarContext from '../Sidebar/SidebarContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      opacity: ({ counterValue }) => (counterValue === 0 ? 0 : 1),
      transition: theme.transitions.create(['opacity'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.common.white,
      backgroundColor: theme.palette.error.main,
      flexShrink: 0,
      width: ({ expanded }) => (expanded ? '20px' : '14px'),
      height: ({ expanded }) => (expanded ? '20px' : '14px'),
      marginLeft: ({ expanded }) => (expanded ? 0 : theme.spacing(1)),
      fontSize: '75%',
      fontWeight: 'bold',
      borderRadius: '50%',
    },
  }),
  {
    name: 'SidebarCounter',
  },
);

const SidebarCounter = ({ className, counterValue }) => {
  const { expanded } = React.useContext(SidebarContext);
  const classes = useStyles({ expanded, counterValue });

  return <div className={cn(classes.root, className)}>{counterValue}</div>;
};

SidebarCounter.defaultProps = {
  className: null,
  counterValue: 0,
};

SidebarCounter.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  counterValue: PropTypes.number,
};

export default SidebarCounter;
