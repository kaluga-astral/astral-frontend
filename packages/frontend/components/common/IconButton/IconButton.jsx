import PropTypes from 'prop-types';
import React from 'react';
import { IconButton as MuiIconButton } from '@material-ui/core';

import SvgIcon from '../SvgIcon';
import CircularProgress from '../CircularProgress';

const IconButton = React.forwardRef(
  ({ loading, success, disabled, children, ...props }, ref) => {
    const renderChildren = React.useCallback(() => {
      if (loading) {
        return <CircularProgress size={24} />;
      }

      if (success) {
        return (
          <SvgIcon>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </SvgIcon>
        );
      }

      return children;
    }, [loading, success, children]);

    return (
      <MuiIconButton
        ref={ref}
        disabled={disabled || loading || success}
        {...props}
      >
        {renderChildren()}
      </MuiIconButton>
    );
  },
);

IconButton.defaultProps = {
  className: null,
  disabled: false,
  loading: false,
  success: false,
};

IconButton.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default IconButton;
