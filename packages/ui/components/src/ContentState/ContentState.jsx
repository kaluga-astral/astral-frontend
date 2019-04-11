import PropTypes from 'prop-types';
import React from 'react';

// import ErrorBoundary from '../../ErrorBoundary';
// import DefaultLoadingState from './LoadingState';
// import DefaultFailureState from './FailureState';

const DefaultLoadingState = () => <div>loading</div>;
const DefaultFailureState = () => <div>failure</div>;

const ContentState = ({
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
    {!isFetching && !error && children()}
  </>
);

ContentState.defaultProps = {
  error: null,
  loaderProps: {},
  className: null,
  children: null,
  preventShowLoadingMessage: false,
  LoadingStateComponent: props => <DefaultLoadingState {...props} />,
  FailureStateComponent: props => <DefaultFailureState {...props} />,
};

ContentState.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  preventShowLoadingMessage: PropTypes.bool,
  loaderProps: PropTypes.shape(),
  children: PropTypes.func,
  className: PropTypes.string,
  FailureStateComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  LoadingStateComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

const ContentStateWrapper = ({ children, ...props }) => (
  <ContentState {...props}>{() => children}</ContentState>
);

ContentStateWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
};

export default ContentStateWrapper;
