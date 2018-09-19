import { isFunction } from 'lodash-es';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Loading from './LoadingState';
import Failure from './FailureState';

const ContentStatus = ({
  isFetching, error, classes, className, loaderProps, children,
}) => (
  <Fragment>
    {(isFetching || error) && (
      <div className={cn(classes.root, className)}>
        {isFetching && !error && <Loading loaderProps={loaderProps} />}
        {!isFetching && error && <Failure error={error} />}
      </div>
    )}
    {!isFetching && !error && isFunction(children) && children()}
  </Fragment>
);

ContentStatus.defaultProps = {
  error: null,
  loaderProps: {},
  className: null,
  children: null,
};

ContentStatus.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  loaderProps: PropTypes.shape(),
  children: PropTypes.func,
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
};

export default withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    // padding: '1em',
    boxSizing: 'border-box',
  },
})(ContentStatus);
