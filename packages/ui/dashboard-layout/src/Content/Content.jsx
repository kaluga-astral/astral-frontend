import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FlexContainer, FlexItem, Box } from '@astral-frontend/components';

const DashboardLayoutContent = ({ className, children }) => {
  return (
    <FlexContainer
      className={cn(className)}
      direction="column"
      component={componentProps => (
        <FlexItem {...componentProps} component={Box} overflow="hidden" />
      )}
      grow={1}
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
