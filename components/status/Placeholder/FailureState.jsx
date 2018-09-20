import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '../../Button';

const PlaceholderFailureState = ({ error, classes, onRetry }) => (
  <Fragment>
    <div className={classes.status}>Произошла ошибка</div>
    <div className={classes.message}>
      {error.response ? error.response.data.message : error.message}
    </div>
    {onRetry && (
      <Button className={classes.retryButton} onClick={onRetry}>
        Попробовать еще раз
      </Button>
    )}
  </Fragment>
);

PlaceholderFailureState.defaultProps = {
  error: null,
  onRetry: null,
};

PlaceholderFailureState.propTypes = {
  error: PropTypes.instanceOf(Error),
  classes: PropTypes.shape().isRequired,
  onRetry: PropTypes.func,
};

export default withStyles({
  status: {
    fontSize: '1em',
  },
  message: {
    color: '#4e4e4e',
  },
  retryButton: {
    marginTop: '10px',
  },
})(PlaceholderFailureState);