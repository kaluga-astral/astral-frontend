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
  padding: {
    padding: '20px',
  },
});

const DashboardLayoutMainModalContent = ({ className, children, disablePadding }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, className, { [classes.padding]: !disablePadding })}>
      {children}
    </div>
  );
};

DashboardLayoutMainModalContent.defaultProps = {
  className: null,
  disablePadding: false,
};

DashboardLayoutMainModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disablePadding: PropTypes.bool,
};

export default DashboardLayoutMainModalContent;
