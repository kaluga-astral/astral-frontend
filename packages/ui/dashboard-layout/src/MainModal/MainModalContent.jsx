import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
});

const DashboardLayoutMainModalContent = ({ className, children }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, className)}>
      {children}
    </div>
  );
};

DashboardLayoutMainModalContent.defaultProps = {
  className: null,
};

DashboardLayoutMainModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutMainModalContent;
