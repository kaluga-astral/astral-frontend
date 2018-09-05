import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeMain = ({ children, classes }) => (
  <main className={classes.root}>{children}</main>
);

HomeMain.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default withStyles({
  root: {

  },
})(HomeMain);
