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

  handleReloadButtonClick() {
    window.location.reload();
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
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

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
