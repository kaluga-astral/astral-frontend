import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

import ErrorPlaceholder from './ErrorPlaceholder';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
  }

  render() {
    const { hasError } = this.state;
    const { children, ErrorPlaceholderComponent } = this.props;

    if (hasError) {
      return <ErrorPlaceholderComponent />;
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  ErrorPlaceholderComponent: ErrorPlaceholder,
};

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
  ErrorPlaceholderComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

export default ErrorBoundary;
