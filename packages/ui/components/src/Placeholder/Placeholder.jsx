import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import CircularProgress from '../CircularProgress';

const Placeholder = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress />
  </div>
);

Placeholder.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'fill-available',
  },
})(Placeholder);
