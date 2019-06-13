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
