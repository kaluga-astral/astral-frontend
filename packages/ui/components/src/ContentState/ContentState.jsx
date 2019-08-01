import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Placeholder from '../Placeholder';

const ContentState = ({
  loading,
  error,
  placeholderProps,
  children,
  component: Component,
  LoadingStateComponent,
  FailureStateComponent,
}) => {
  const renderChildren = () => {
    if (loading) {
      return <LoadingStateComponent {...placeholderProps} />;
    }

    if (error) {
      return <FailureStateComponent {...placeholderProps} error={error} />;
    }

    return children;
  };

  return <Component>{renderChildren()}</Component>;
};

ContentState.defaultProps = {
  error: null,
  placeholderProps: {},
  component: Fragment,
  LoadingStateComponent: props => <Placeholder {...props} state="loading" />,
  // eslint-disable-next-line react/prop-types
  FailureStateComponent: ({ error, ...props }) => <Placeholder {...props} state="failure" error={error} />,
};

ContentState.propTypes = {
  loading: PropTypes.bool.isRequired,
  placeholderProps: PropTypes.shape({}),
  error: PropTypes.instanceOf(Error),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any,
  LoadingStateComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  FailureStateComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default ContentState;
