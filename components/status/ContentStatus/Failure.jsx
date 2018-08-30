import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '../../Button';

const Failure = ({ error, classes, onRetry }) => (
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

Failure.defaultProps = {
  error: null,
  onRetry: null,
};

Failure.propTypes = {
  error: PropTypes.instanceOf(Error),
  classes: PropTypes.shape().isRequired,
  onRetry: PropTypes.func,
};

export default withStyles({
  status: {
    marginBottom: '10px',
    fontSize: '24px',
  },
  message: {
    color: '#4e4e4e',
  },
  retryButton: {
    marginTop: '10px',
  },
})(Failure);
