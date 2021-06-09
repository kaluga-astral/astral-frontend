import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, FlexContainer, FlexItem } from '@astral/components';

const DashboardLayoutContentComponent = componentProps => (
  <FlexItem {...componentProps} component={Box} grow={1} overflow="hidden" />
);

const DashboardLayoutContent = ({ className, children }) => {
  return (
    <FlexContainer
      className={cn(className)}
      direction="column"
      component={DashboardLayoutContentComponent}
    >
      {children}
    </FlexContainer>
  );
};

DashboardLayoutContent.defaultProps = {
  className: null,
};

DashboardLayoutContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutContent;
