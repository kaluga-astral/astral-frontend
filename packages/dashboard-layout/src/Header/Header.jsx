import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FlexContainer } from '@astral/components';
import { makeStyles } from '@astral/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      flexShrink: 0,
      height: '75px',
      margin: `0 ${theme.spacing(4)}px`,
      userSelect: 'none',
    },
  }),
  { name: 'DashboardLayoutHeader' },
);

const DashboardLayoutHeader = ({ className, children }) => {
  const classes = useStyles();

  return (
    <FlexContainer component="header" className={cn(classes.root, className)}>
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
