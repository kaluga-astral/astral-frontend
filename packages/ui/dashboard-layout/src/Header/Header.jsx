import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      flexShrink: 0,
      height: '75px',
      backgroundColor: theme.palette.background.paper,
    },
  }),
  { name: 'DashboardLayoutHeader' },
);

const DashboardLayoutHeader = ({ className, children }) => {
  const classes = useStyles();

  return (
    <FlexContainer
      component="header"
      alignItems="center"
      className={cn(classes.root, className)}
    >
      {children}
    </FlexContainer>
  );
};

DashboardLayoutHeader.defaultProps = {
  className: null,
};

DashboardLayoutHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutHeader;
