import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import ErrorBoundry from '../ErrorBoundry';
import Placeholder from '../Placeholder';

const ContentState = ({
  loading,
  error,
  PlaceholderProps,
  children,
  component: Component,
  LoadingStateComponent,
  FailureStateComponent,
  ...props
}) => {
  const renderChildren = () => {
    if (loading) {
      return <LoadingStateComponent {...PlaceholderProps} />;
    }

    if (error) {
      return <FailureStateComponent {...PlaceholderProps} error={error} />;
    }

    return children;
  };

  return (
    <ErrorBoundry>
      <Component {...props}>{renderChildren()}</Component>
    </ErrorBoundry>
  );
};

ContentState.defaultProps = {
  error: null,
  PlaceholderProps: {},
  component: Fragment,
  LoadingStateComponent: props => <Placeholder {...props} state="loading" />,
  // eslint-disable-next-line react/prop-types
  FailureStateComponent: ({ error, ...props }) => (
    <Placeholder {...props} state="failure" error={error} />
  ),
};

ContentState.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any,
  PlaceholderProps: PropTypes.shape({}),
  LoadingStateComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  FailureStateComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default ContentState;
