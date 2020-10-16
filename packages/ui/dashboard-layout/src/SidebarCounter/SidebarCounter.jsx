import PropTypes, { shape } from 'prop-types';
import React from 'react';
import cn from 'classnames';

import { makeStyles } from '@astral-frontend/styles';

import SidebarContext from '../Sidebar/SidebarContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.common.white,
      backgroundColor: theme.palette.error.main,
      flexShrink: 0,
      width: '20px',
      height: '20px',
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
  const { expanded } = React.useContext(SidebarContext) || { expanded: true };
  const classes = useStyles({ expanded });

  return (
    Boolean(counterValue) && (
      <div className={cn(classes.root, className)}>{counterValue}</div>
    )
  );
};

SidebarCounter.defaultProps = {
  className: null,
  counterValue: null,
};

SidebarCounter.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  counterValue: PropTypes.number,
};

export default SidebarCounter;
