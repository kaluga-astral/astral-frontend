import React from 'react';
import Loadable from 'react-loadable';
import { withStyles } from '@material-ui/core/styles';

import UnhandledError from './UnhandledError';
import { Loader } from './status';

const Loading = withStyles({
  pastDelay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
})(({
  error, timedOut, pastDelay, classes,
}) => {
  if (error) {
    return <UnhandledError />;
  }
  if (timedOut) {
    return (
      <div className={classes.pastDelay}>
        <Loader />
        <div>Требуется еще немного время</div>
      </div>
    );
  }
  if (pastDelay) {
    return (
      <div className={classes.pastDelay}>
        <Loader />
      </div>
    );
  }
  return null;
});

export default loader => Loadable({
  loader,
  loading: Loading,
});
