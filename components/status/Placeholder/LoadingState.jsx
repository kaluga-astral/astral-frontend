import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Loader from '../Loader';

const PAST_DELAY_TIMEOUT = 100;
const TIME_OUT_TIMEOUT = 8000;

class PlaceholderLoadingState extends PureComponent {
  state = {
    pastDelay: false,
    timedOut: false,
  };

  pastDelayTimer = null;

  timeOutTimer = null;

  componentDidMount = () => {
    this.pastDelayTimer = setTimeout(() => {
      this.setState({
        pastDelay: true,
      });
    }, PAST_DELAY_TIMEOUT);
    this.timeOutTimer = setTimeout(() => {
      this.setState({
        timedOut: true,
      });
    }, TIME_OUT_TIMEOUT);
  };

  componentWillUnmount = () => {
    clearTimeout(this.pastDelayTimer);
    clearTimeout(this.timeOutTimer);
  };

  render = () => {
    const { pastDelay, timedOut } = this.state;
    const {
      classes,
      preventShowLoadingMessage,
      loaderProps: { ...loaderProps },
    } = this.props;

    return (
      <Fragment>
        {pastDelay && <Loader className={classes.status} {...loaderProps} />}
        {timedOut
          && !preventShowLoadingMessage && (
            <span className={classes.message}>Требуется еще немного времени</span>
        )}
      </Fragment>
    );
  };
}

PlaceholderLoadingState.defaultProps = {
  loaderProps: {},
};

PlaceholderLoadingState.propTypes = {
  preventShowLoadingMessage: PropTypes.bool.isRequired,
  loaderProps: PropTypes.shape({}),
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  status: {},
  message: {
    marginTop: '20px',
    color: '#4e4e4e',
  },
})(PlaceholderLoadingState);
