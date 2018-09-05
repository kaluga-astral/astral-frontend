import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeFooterSection = ({ title, classes, children }) => (
  <section className={classes.root}>
    <h4 className={classes.title}>{title}</h4>
    {children}
  </section>
);

HomeFooterSection.defaultProps = {
  children: null,
};

HomeFooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.shape({

  }).isRequired,
  children: PropTypes.node,
};

export default withStyles({
  root: {

  },
  title: {

  },
})(HomeFooterSection);
