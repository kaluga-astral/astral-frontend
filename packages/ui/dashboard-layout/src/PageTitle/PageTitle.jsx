import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FlexItem } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      margin: '0 15px',
      fontSize: '18px',
    },
  }),
  { name: 'DashboardLayoutPageTitle' },
);

const DashboardLayoutPageTitle = ({ className, children, ...props }) => {
  const classes = useStyles();

  return (
    <FlexItem component="h1" grow={1} className={cn(classes.root, className)} {...props}>
      {children}
    </FlexItem>
  );
};

DashboardLayoutPageTitle.defaultProps = {
  className: null,
};

DashboardLayoutPageTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutPageTitle;
