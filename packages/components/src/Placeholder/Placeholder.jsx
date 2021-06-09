import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

import CircularProgress from '../CircularProgress';
import FlexContainer from '../FlexContainer';

const useStyles = makeStyles(
  () => ({
    root: {
      height: '100%',
      maxHeight: 'fill-available',
      width: 'calc(100% - 30px)',
      margin: '0 15px',
    },
  }),
  { name: 'Placeholder' },
);

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

  return (
    <FlexContainer
      alignItems="center"
      justifyContent="center"
      className={cn(classes.root, className)}
    >
      {renderChildren()}
    </FlexContainer>
  );
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
