import { isFunction } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';

import DefaultLoadingState from './LoadingState';
import DefaultFailureState from './FailureState';

const Placeholder = ({
  isFetching,
  error,
  className,
  preventShowLoadingMessage,
  loaderProps,
  children,
  LoadingStateComponent,
  FailureStateComponent,
}) => {
  if (isFetching && !error && LoadingStateComponent) {
    return (
      <LoadingStateComponent
        className={className}
        preventShowLoadingMessage={preventShowLoadingMessage}
        loaderProps={loaderProps}
      />
    );
  }

  if (!isFetching && error && FailureStateComponent) {
    return <FailureStateComponent className={className} error={error} />;
  }

  if (!isFetching && !error && isFunction(children)) {
    return children();
  }

  return (
    <DefaultFailureState error={new Error(`Error: isFetching: ${isFetching}, error: ${error}`)} />
  );
};

Placeholder.defaultProps = {
  error: null,
  loaderProps: {},
  className: null,
  children: null,
  preventShowLoadingMessage: false,
  LoadingStateComponent: props => <DefaultLoadingState {...props} />,
  FailureStateComponent: props => <DefaultFailureState {...props} />,
};

Placeholder.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  preventShowLoadingMessage: PropTypes.bool,
  loaderProps: PropTypes.shape(),
  children: PropTypes.func,
  className: PropTypes.string,
  FailureStateComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  LoadingStateComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default Placeholder;
