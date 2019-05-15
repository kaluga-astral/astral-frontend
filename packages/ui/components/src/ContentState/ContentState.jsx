import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Placeholder from '../Placeholder';

const ContentState = ({
  isFetching,
  error,
  children,
  component: Component,
  LoadingStateComponent,
  FailureStateComponent,
}) => {
  const renderChildren = () => {
    if (isFetching) {
      return <LoadingStateComponent />;
    }

    if (error) {
      return <FailureStateComponent error={error} />;
    }

    return children;
  };

  return <Component>{renderChildren()}</Component>;
};

ContentState.defaultProps = {
  error: null,
  component: Fragment,
  LoadingStateComponent: () => <Placeholder state="loading" />,
  // eslint-disable-next-line react/prop-types
  FailureStateComponent: ({ error }) => <Placeholder state="error" error={error} />,
};

ContentState.propTypes = {
  isFetching: PropTypes.bool.isRequired,
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
