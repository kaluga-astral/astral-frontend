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
}) => (
  <>
    {isFetching && !error && LoadingStateComponent && (
      <LoadingStateComponent
        className={className}
        preventShowLoadingMessage={preventShowLoadingMessage}
        loaderProps={loaderProps}
      />
    )}
    {!isFetching && error && FailureStateComponent && (
      <FailureStateComponent className={className} error={error} />
    )}
    {!isFetching && !error && isFunction(children) && children()}
  </>
);

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
