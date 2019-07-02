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
    minHeight: 'fill-available',
  },
});

const Placeholder = ({ className, state, error }) => {
  const classes = useStyles();
  const renderChildren = () => {
    switch (state) {
      case 'loading':
        return <CircularProgress />;
      case 'failure':
        return (
          <div>
            <div>Произошла ошибка</div>
            <div>{error.message}</div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className={cn(classes.root, className)}>{renderChildren()}</div>;
};

Placeholder.defaultProps = {
  className: null,
  state: null,
  error: null,
};

Placeholder.propTypes = {
  className: PropTypes.string,
  state: PropTypes.oneOf(['loading', 'failure']),
  error: PropTypes.instanceOf(Error),
};

export default Placeholder;
