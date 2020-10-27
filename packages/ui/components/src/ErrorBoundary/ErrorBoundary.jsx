import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

import Typography from '../Typography';
import Button from '../Button';

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

  // eslint-disable-next-line class-methods-use-this
  handleReloadButtonClick() {
    window.location.reload();
  }

  render() {
    const { hasError } = this.state;
    const { children, ErrorComponent } = this.props;

    if (hasError) {
      if (ErrorComponent) {
        return <ErrorComponent />;
      }

      return (
        <div>
          <Typography>Что-то пошло не так.</Typography>
          <Button onClick={this.handleReloadButtonClick}>
            Обновить страницу
          </Button>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  ErrorComponent: null,
};

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
  ErrorComponent: PropTypes.func,
};

export default ErrorBoundary;
