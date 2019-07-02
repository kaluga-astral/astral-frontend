import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.grey[100]}`,
  },
  padding: {
    padding: '20px',
  },
}));

const DashboardLayoutMainModalFooter = ({
  className, children, disablePadding, ...props
}) => {
  const classes = useStyles();

  return (
    <FlexContainer
      component="footer"
      className={cn(classes.root, className, { [classes.padding]: !disablePadding })}
      {...props}
    >
      {children}
    </FlexContainer>
  );
};

DashboardLayoutMainModalFooter.defaultProps = {
  className: null,
  disablePadding: false,
};

DashboardLayoutMainModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disablePadding: PropTypes.bool,
};

export default DashboardLayoutMainModalFooter;
