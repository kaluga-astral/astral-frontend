import { isFunction } from 'lodash-es';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Loading from './LoadingState';
import Failure from './FailureState';

const Placeholder = ({
  isFetching,
  error,
  classes,
  className,
  preventShowLoadingMessage,
  loaderProps,
  children,
}) => (
  <Fragment>
    {(isFetching || error) && (
      <div className={cn(classes.root, className)}>
        {isFetching && !error && (
          <Loading
            preventShowLoadingMessage={preventShowLoadingMessage}
            loaderProps={loaderProps}
          />
        )}
        {!isFetching && error && <Failure error={error} />}
      </div>
    )}
    {!isFetching && !error && isFunction(children) && children()}
  </Fragment>
);

Placeholder.defaultProps = {
  error: null,
  loaderProps: {},
  className: null,
  children: null,
  preventShowLoadingMessage: false,
};

Placeholder.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  preventShowLoadingMessage: PropTypes.bool,
  loaderProps: PropTypes.shape(),
  children: PropTypes.func,
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'fill-available',
    minHeight: 'max-content',
    maxHeight: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
    overflow: 'hidden',
    color: theme.palette.primary.main,
  },
}))(Placeholder);
