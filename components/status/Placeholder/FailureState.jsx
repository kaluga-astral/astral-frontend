import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Wrapper from './Wrapper';
import Button from '../../Button';

const PlaceholderFailureState = ({ error, classes, onRetry }) => (
  <Wrapper>
    <div className={classes.status}>Произошла ошибка</div>
    <div className={classes.message}>{(error || {}).message}</div>
    {onRetry && (
      <Button className={classes.retryButton} onClick={onRetry}>
        Попробовать еще раз
      </Button>
    )}
  </Wrapper>
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

export default withStyles(theme => ({
  status: {
    color: theme.palette.common.black,
    fontSize: '1.3em',
    marginBottom: '10px',
  },
  message: {
    color: '#4e4e4e',
  },
  retryButton: {
    marginTop: '10px',
  },
}))(PlaceholderFailureState);
