import bugsnag from '@bugsnag/js';
import PropTypes from 'prop-types';
import React from 'react';
import bugsnagReact from '@bugsnag/plugin-react';

export const Context = React.createContext();

const BugsnagProvider = ({ apiKey, releaseStage, children }) => {
  const bugsnagClient = bugsnag({
    apiKey,
    releaseStage,
    notifyReleaseStages: ['production', 'staging', 'development'],
    logger: null,
  });
  bugsnagClient.use(bugsnagReact, React);
  const WrapComponent = bugsnagClient.getPlugin('react');

  return <Context.Provider value={{ WrapComponent }}>{children}</Context.Provider>;
};

BugsnagProvider.propTypes = {
  apiKey: PropTypes.string.isRequired,
  releaseStage: PropTypes.oneOf(['production', 'staging', 'development', 'local']).isRequired,
  children: PropTypes.node.isRequired,
};

export default BugsnagProvider;
