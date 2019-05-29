import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FlexContainer } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutMainModalFooter = ({
  classes,
  className,
  children,
  disablePadding,
  ...props
}) => (
  <FlexContainer
    component="footer"
    className={cn(classes.root, className, { [classes.padding]: !disablePadding })}
    {...props}
  >
    {children}
  </FlexContainer>
);

DashboardLayoutMainModalFooter.defaultProps = {
  className: null,
  disablePadding: false,
};

DashboardLayoutMainModalFooter.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disablePadding: PropTypes.bool,
};

export default withStyles({
  root: {},
  padding: {
    padding: '20px',
  },
})(DashboardLayoutMainModalFooter);
