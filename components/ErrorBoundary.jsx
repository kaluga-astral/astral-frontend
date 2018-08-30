import PropTypes from 'prop-types';
import React from 'react';
import createPlugin from 'bugsnag-react';

const UnhandledError = () => <pre>An error has occurred</pre>;

const ErrorBoundary = ({ bugsnagClient, children }) => {
  const Component = bugsnagClient.use(createPlugin(React));

  return <Component FallbackComponent={UnhandledError}>{children}</Component>;
};

ErrorBoundary.propTypes = {
  bugsnagClient: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
