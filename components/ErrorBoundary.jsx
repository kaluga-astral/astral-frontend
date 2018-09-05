import PropTypes from 'prop-types';
import bugsnag from 'bugsnag-js';
import React, { Component } from 'react';
import createPlugin from 'bugsnag-react';
import { withStyles } from '@material-ui/core/styles';

const UnhandledError = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
})(({ classes }) => <pre className={classes.root}>An error has occurred</pre>);

class ErrorBoundary extends Component {
  get bugsnagClient() {
    const { apiKey } = this.props;

    return bugsnag({
      apiKey,
      notifyReleaseStages: ['production', 'staging'],
      logger: null,
    });
  }

  render = () => {
    const { children } = this.props;
    const WrappedComponent = this.bugsnagClient.use(createPlugin(React));

    return <WrappedComponent FallbackComponent={UnhandledError}>{children}</WrappedComponent>;
  };
}

ErrorBoundary.propTypes = {
  apiKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
