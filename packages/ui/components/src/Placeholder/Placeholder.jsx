import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import CircularProgress from '../CircularProgress';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
});

const Placeholder = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, className)}>
      <CircularProgress />
    </div>
  );
};

Placeholder.defaultProps = {
  className: null,
};

Placeholder.propTypes = {
  className: PropTypes.string,
};

export default Placeholder;

// import PropTypes from 'prop-types';
// import React, { PureComponent } from 'react';
// import { withStyles } from '@astral-frontend/styles';

// import CircularProgress from '../CircularProgress';
// import Wrapper from './Wrapper';

// const PAST_DELAY_TIMEOUT = 100;
// const TIME_OUT_TIMEOUT = 8000;

// class PlaceholderLoadingState extends PureComponent {
//   state = {
//     pastDelay: false,
//     timedOut: false,
//   };

//   pastDelayTimer = null;

//   timeOutTimer = null;

//   componentDidMount = () => {
//     this.pastDelayTimer = setTimeout(() => {
//       this.setState({
//         pastDelay: true,
//       });
//     }, PAST_DELAY_TIMEOUT);
//     this.timeOutTimer = setTimeout(() => {
//       this.setState({
//         timedOut: true,
//       });
//     }, TIME_OUT_TIMEOUT);
//   };

//   componentWillUnmount = () => {
//     clearTimeout(this.pastDelayTimer);
//     clearTimeout(this.timeOutTimer);
//   };

//   render = () => {
//     const { pastDelay, timedOut } = this.state;
//     const {
//       classes,
//       preventShowLoadingMessage,
//       loaderProps: { ...loaderProps },
//     } = this.props;

//     return (
//       <Wrapper>
//         {pastDelay && <CircularProgress className={classes.status} {...loaderProps} />}
//         {timedOut && !preventShowLoadingMessage && (
//           <span className={classes.message}>Требуется еще немного времени</span>
//         )}
//       </Wrapper>
//     );
//   };
// }

// PlaceholderLoadingState.defaultProps = {
//   loaderProps: {},
// };

// PlaceholderLoadingState.propTypes = {
//   preventShowLoadingMessage: PropTypes.bool.isRequired,
//   loaderProps: PropTypes.shape({}),
//   classes: PropTypes.shape().isRequired,
// };

// export default withStyles({
//   status: {},
//   message: {
//     marginTop: '20px',
//     color: '#4e4e4e',
//   },
// })(PlaceholderLoadingState);
