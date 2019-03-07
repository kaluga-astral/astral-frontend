import PropTypes from 'prop-types';
import React from 'react';
import bugsnagReact from '@bugsnag/plugin-react';

import ErrorBoundary from './ErrorBoundary';

export const Context = React.createContext();

const BugsnagProvider = ({ bugsnagClient, children }) => {
  bugsnagClient.use(bugsnagReact, React);
  const WrapComponent = bugsnagClient.getPlugin('react');

  return (
    <Context.Provider value={{ WrapComponent }}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Context.Provider>
  );
};

BugsnagProvider.propTypes = {
  bugsnagClient: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default BugsnagProvider;
