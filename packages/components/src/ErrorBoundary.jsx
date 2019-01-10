import PropTypes from 'prop-types';
import React from 'react';

import { Context } from './BugsnagProvider';
import UnhandledError from './UnhandledError';

const ErrorBoundary = ({ children, beforeSend, FallbackComponent }) => (
  <Context.Consumer>
    {({ WrapComponent }) => (
      <WrapComponent beforeSend={beforeSend} FallbackComponent={FallbackComponent}>
        {children}
      </WrapComponent>
    )}
  </Context.Consumer>
);

ErrorBoundary.defaultProps = {
  beforeSend: null,
  FallbackComponent: UnhandledError,
};

ErrorBoundary.propTypes = {
  children: PropTypes.PropTypes.oneOfType([PropTypes.node]).isRequired,
  beforeSend: PropTypes.func,
  FallbackComponent: PropTypes.oneOfType([PropTypes.func]),
};

export default ErrorBoundary;
