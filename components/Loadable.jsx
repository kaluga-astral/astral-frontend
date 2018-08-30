import React from 'react';
import Loadable from 'react-loadable';
import { withStyles } from '@material-ui/core/styles';

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
    return <div>Произошла ошибка</div>;
  } else if (timedOut) {
    return <div>Требуется еще немного время</div>;
  } else if (pastDelay) {
    return (
      <div className={classes.pastDelay}>
        <Loader />
      </div>
    );
  }
  return null;
});

export default loader =>
  Loadable({
    loader,
    loading: Loading,
  });
