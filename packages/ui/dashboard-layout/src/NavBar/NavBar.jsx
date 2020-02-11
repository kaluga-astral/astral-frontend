import PropTypes from 'prop-types';
import React from 'react';

import { FlexContainer, FlexItem } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      height: '100%',
      padding: theme.spacing(3, 4),
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
    },
  }),
  { name: 'DashboardLayoutNavBar' },
);

const DashboardLayoutNavBar = ({ children }) => {
  const classes = useStyles();

  return (
    <FlexContainer
      className={classes.root}
      component={FlexItem}
      grow={1}
      alignItems="center"
    >
      {children}
    </FlexContainer>
  );
};

DashboardLayoutNavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutNavBar;
